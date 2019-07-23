import * as mongoose from "mongoose";
import { Blog } from './blog';
import { Contact } from './contact';
import { User } from './user';
import { env } from 'process';

export class Database {
    constructor() {
        this.mongoSetup();
    }

    models = {
        Blog, Contact, User
    }

    private mongoSetup(): void{
        const environ = env.NODE_ENV || 'development';
        const config = require(__dirname + '/../config/config.json')[env];
        mongoose.Promise = global.Promise;
        if (config.use_env_variable) {
            mongoose.connect(config.use_env_variable);
        }    
    }
}
