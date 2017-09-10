import {cpus} from 'os';
import * as cluster from 'cluster';
import server from './server';
import models from '../models';

if(cluster.isMaster){

    // Count the machine's CPUs
    let cpuCount = cpus().length;

    // Create a worker for each CPU
    for (let i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }

    cluster.on('exit', worker => {
        console.log('Worker %d died', worker.id);
        cluster.fork();
    })
} else {
    server.set()
}
