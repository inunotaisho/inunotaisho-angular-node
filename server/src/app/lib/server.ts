import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as path from 'path';
import * as cookieParser from 'cookie-parser';
import * as helmet from 'helmet';
import * as favicon from 'serve-favicon';
import * as methodOverride from 'method-override';
import * as morgan from 'morgan';
import { createServer, Server } from "http";
import * as https from 'https';




export class app {

  public app: express.Application;

  public Start(): Promise<express.Application> {

    return new Promise((resolve, reject) => {
      resolve(this.app);
    });

  }

  constructor() {
    this.app = express();
    this.config();

  }

  private config() {

    this.app.use(cookieParser());
    this.app.use(helmet.frameguard());
    this.app.use(helmet.hsts());
    this.app.use(helmet.noSniff());
    this.app.use(favicon(path.join(__dirname, '/assets', 'inu.ico')));

    // to extract form data from POST bodies
    this.app.use(bodyParser.json());                         // for parsing application/json
    this.app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

    // serving static files 
    this.app.use(express.static('public'));

    //requiring routes module
    this.app.use(require('./routes/routes'));
  }
}
