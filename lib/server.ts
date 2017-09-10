import * as express from 'express';
import * as bodyParser from 'body-parser';



export default class server {
    public app: express.Application

    public static bootstrap(): server {
        return new server();
    }


    constructor(){
        this.app = express();
    
        this.config();
    }

    public config(){

    }
}
