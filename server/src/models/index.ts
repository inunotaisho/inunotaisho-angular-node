import * as mongoose from "mongoose";
import './blog';
import './contact';
import './user';

export class Database {

    static Blog: any;
    static Contact: any;
    static User: any;

    constructor() {
        this.mongoSetup();
        this.initModels();
    }

    private initModels(): void {
        Database.Blog = mongoose.model('Blog');
        Database.Contact = mongoose.model('Contact');
        Database.User = mongoose.model('User');
    }

    private mongoSetup(): void{
        
        const env = process.env.NODE_ENV || 'development';
        const config = require(__dirname + '/config/config.json')[env];
        
        // mongoose.Promise = global.Promise;
        if (config.use_env_variable) {
            mongoose.connect(config.use_env_variable);
        }    
    }
}

new Database();

export { Database as db};
