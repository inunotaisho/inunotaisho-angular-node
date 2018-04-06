import * as mongoose from 'mongoose';
import { Blog } from './blog';
import { Contact } from './contact';
import { User } from './user';
const env       = process.env.NODE_ENV || 'development';
const config    = require(__dirname + '/../config/config.json')[env];

export default class db {;
    constructor(){
    }
    
    if(config.use_env_variable){
        var mongoose = mongoose.connect(config.use_env_variable);
    }

    db = {
        Blog, Contact, User
    }
}