import * as mongoose from "mongoose";
import { Blog } from './blog';
import { Contact } from './contact';
import { User } from './user';

export class Database {
    constructor() {
        this.mongoSetup();
    }

    Blog = Blog;
    Contact = Contact;
    User = User;

    private mongoSetup(): void{
        
        const env = process.env.NODE_ENV || 'development';
        const config = require(__dirname + '/../config/config.json')[env];


        // mongoose.Promise = global.Promise;
        if (config.use_env_variable) {
            mongoose.connect(config.use_env_variable);
        }    
    }
}
