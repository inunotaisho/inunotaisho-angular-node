import * as cluster from 'cluster';
import { cpus } from 'os';
import { env } from 'process';
import { app } from './server';
import { Database } from '../../models';


if (cluster.isMaster) {

  console.log(`\n -------------------> RUN ${env.NODE_ENV} ENVIRONMENT \n`);

  let cpuCount = require('os').cpus().length;

    // Create a worker for each CPU
    for (let i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }

  cluster.on("exit", (worker, code, signal) => {
    console.log("Worker " + worker.process.pid + " died with code: " + code + ", and signal: " + signal);
    console.log("Starting a new worker");
    cluster.fork();
  });

} else {

  const port: number = Number(env.PORT) || 5000;

  new app().Start().then((server) => {

    server.set('port', port);

    server.on("error", (error: any) => {
      if (error.syscall !== "listen") {
        throw error;
      }

      const bind = typeof port === "string"
        ? "Pipe " + port
        : "Port " + port;

      switch (error.code) {
        case "EACCES":
          console.error(bind + " requires elevated privileges");
          process.exit(1);
          break;
        case "EADDRINUSE":
          console.error(bind + " is already in use");
          process.exit(1);
          break;
        default:
          throw error;
      }
    });

    server.listen(server.get('port'), function () {
      console.log('server running', cluster.worker.id);
    });

  }).catch();

}