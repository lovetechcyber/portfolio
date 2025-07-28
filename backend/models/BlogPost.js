const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  summary: { type: String, required: true },
  content: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  date: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('BlogPost', blogPostSchema);
