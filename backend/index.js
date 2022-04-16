import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import UserRoot from './routes/UserRoute.js';

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/crudmren_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('database Conected...'));

app.use(cors());
app.use(express.json());
app.use(UserRoot);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
