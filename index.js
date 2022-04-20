import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import UserRoot from './routes/UserRoute.js';

const app = express();
const port = process.env.PORT || 5000;
const database =
  process.env.MONGO_URI || 'mongodb://localhost:27017/crudmren_db';

mongoose.connect(database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('database Conected...'));

app.use(cors());
app.use(express.json());
app.use(UserRoot);

// if (process.env.NODE_DEV === 'production') {
//   app.use(express.static('client/build'));
//   app.get('*', (req, res) => {
//     req.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
//   });
// }

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
