const mongoose = require('mongoose')

const MONGO_URI = 'mongodb+srv://vkhoang:<password>@cluster1.ynrsp8x.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'Item-Tracker',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));


const Schema = mongoose.Schema;
// sets a schema for the 'loginInfo' collection
const loginSchema = new Schema({
  userName: String,
  password: String,
});

// creates a model for the 'loginInfo' collection that will be part of the export
const Login = mongoose.model('loginInfo', loginSchema);


// exports all the models in an object to be used in the controller
module.exports = {
  Login
};
