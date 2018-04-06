import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    author: String,
    preview: String,
    subject: String,
    post: String
});

export const Blog = mongoose.model('Blog', BlogSchema);

