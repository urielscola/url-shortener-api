import mongoose, { Schema, Document } from 'mongoose';

export interface iLink extends Document {
  hashCode: string;
  fullLink: string;
  shortLink: string;
  createdAt?: string;
}

const linkSchema = new Schema({
  hashCode: { type: String, required: true, unique: true },
  fullLink: { type: String, required: true, unique: true },
  shortLink: { type: String, required: true, unique: true },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model<iLink>('Link', linkSchema);
