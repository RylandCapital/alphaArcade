const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
   name:{
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true
   },
   password: {
      type: String,
      required: true
   }
},{
   timestamps: true,
   collection: 'users'
})
const User = mongoose.model('User', userSchema);

const testSch = new Schema({
}, {
  timestamps: true,
  collection: 'test'
});

const test = mongoose.model('test', testSch);

module.exports = {
   User,
   test
   }
 