import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
  urlCode: String,
  fullUrl: String,
  shortUrl: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Url', urlSchema);
