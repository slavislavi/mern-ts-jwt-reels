const express = require('express');
const bodyParser = require('body-parser');

const PORT = 5000;

const app = express();
app.use(bodyParser.json());

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}

start();
