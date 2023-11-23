import mongoose from 'mongoose';
import app from './app';
import config from './config';

async function server() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('Connected to mongodb');
    app.listen(config.port, () => {
      console.log(`App is listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
server();
