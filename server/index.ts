require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./router/index');

mongoose.set('strictQuery', true);

const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use('/api', router);

const start = async () => {
  try {
    await mongoose
      .connect(process.env.DB_URL)
      .then(() => console.log('Connected DB!'));
    app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
