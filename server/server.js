const path = require('path');
const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const apiRouter = require('./routers/api');

const PORT = 3000;

const MONGO_URI = 'mongodb+srv://vkhoang:KsbWEPqxKmw9tLOu@cluster1.ynrsp8x.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'Item-Tracker',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log('i messed up somewhere'));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.resolve(__dirname, '../src')));

app.use('/api', apiRouter);

// Unknown route handler
app.use((req, res) => res.sendStatus(404));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

module.exports = app;