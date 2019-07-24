import mongoose from 'mongoose';

export const dbConnect = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useCreateIndex: true
    });
    console.log('MongoDB successfully connected.');
  } catch (err) {
    console.log('MongoDB connection error: ', err);
  }
};
