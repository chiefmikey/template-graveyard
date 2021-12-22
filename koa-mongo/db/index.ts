import dotenv from 'dotenv';
import mongoose from 'mongoose';

import modelPost from './models/Post';
import modelUser from './models/User';

dotenv.config();

const container = 'mongo';
const port = '27017';
const database = 'db';
const mongoURI = `mongodb://${process.env.DB_CONTAINER || container}:${
  process.env.DB_PORT || port
}/${process.env.DB_NAME || database}`;

export const database_ = mongoose.connect(mongoURI, {}, () =>
  console.log(`Connected to mongo at: ${mongoURI}`),
);

export const User = mongoose.model('User', modelUser);
export const Post = mongoose.model('Post', modelPost);
