import mongoose from 'mongoose';

export default class MongoConnection {
  public async connect() {
    try {
      await mongoose.connect(
        `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSource=${process.env.DB_PASS}`,
      );
      console.log('Database Connected!!');
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}
