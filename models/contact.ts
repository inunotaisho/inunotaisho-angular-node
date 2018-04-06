import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    subject: String,
    message: String
});

export const Contact = mongoose.model('Contact', ContactSchema);