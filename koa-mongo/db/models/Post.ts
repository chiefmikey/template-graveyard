import mongoose from 'mongoose';

const modelPost = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  title: String,
  content: String,
  tags: Array,
  author: String,
  date: { type: Date, default: Date.now },
  publish: Boolean,
});

export default modelPost;
