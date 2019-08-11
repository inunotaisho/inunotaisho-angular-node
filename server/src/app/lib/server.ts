require('dotenv').config({ silent: true});
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as path from 'path';
import * as cookieParser from 'cookie-parser';
import * as helmet from 'helmet';
import * as favicon from 'serve-favicon';
import * as methodOverride from 'method-override';
import * as morgan from 'morgan';
import * as https from 'https';
import { ROUTER } from '../routes/routes';




export class Application {

  public app: express.Application;

  public Start(): Promise<express.Application> {

    return new Promise((resolve, reject) => {
      resolve(this.app);
    });

  }

  constructor() {
    this.app = express();
    this.config();
    //this.configRouter();
  }

  private config() {

    this.app.use(cookieParser());
    this.app.use(helmet.frameguard());
    this.app.use(helmet.hsts());
    this.app.use(helmet.noSniff());
    this.app.use(favicon(path.join(__dirname, '../../assets', 'inu.ico')));

    // to extract form data from POST bodies
    this.app.use(bodyParser.json({ limit: '50mb' }));                         // for parsing application/json
    this.app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

    // serving static files 
    this.app.use(express.static('public')); 

    this.app.use(
      (req, res, next): void => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS');
        next();
      }
    );

    this.app.use(morgan('combined'));

    this.configRouter();
    // this.app.use(
    //   cors({
    //     credentials: true,
    //     origin: process.env.FRONT_URL || 'http://localhost:3000',
    //   })
    // );
      
    // this.app.use(
    //   (err: any, req: express.Request, res: express.Response, next: express.NextFunction): void => {
    //     err.status = 404;
    //     next(err);
    //   }
    // );
  }

  private configRouter(): void {
    for (const route of ROUTER) {
      console.log(`/api/${route.path}`);
      if (route.middleware.length) {
        this.app.use(`/api/${route.path}`, route.middleware, route.handler);
        continue;
      }
      this.app.use(`/api/${route.path}`, route.handler);
    }

    this.app.use(
      (req: express.Request, res: express.Response, next: express.NextFunction): void => {
        res.status(404);
        res.json({
          error: 'Not found',
        });
        //next();
      }
    );

    this.app.use(
      (err: any, req: express.Request, res: express.Response, next: express.NextFunction): void => {
        if (err.name === 'UnauthorizedError') {
          res.status(401).json({
            error: 'Please send a valid Token...',
          });
        }
        next();
      }
    );

    this.app.use(
      (err: any, req: express.Request, res: express.Response, next: express.NextFunction): void => {
        res.status(err.status || 500);
        res.json({
          error: err.message,
        });
        next();
      }
    );
  }
}

export { Application as app }