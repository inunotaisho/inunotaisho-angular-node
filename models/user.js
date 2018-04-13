const mongoose = require("mongoose"),
      jwt = require('jsonwebtoken'),
      crypto=require('crypto');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    Username: String,
    Email:String,
    FirstName:String,
    LastName:String,
    Salt: {type: String, required: true },
    Hash: {type: String, required: true }
});

UserSchema.methods.setPassword = function(password) {
  this.Salt = crypto.randomBytes(16).toString("hex");
  this.Hash = crypto.pbkdf2Sync(password, this.Salt, 10000, 512,'sha512').toString('hex');
}



UserSchema.methods.comparePassword = function (password) {
  const hash = crypto.pbkdf2Sync(password, this.Salt, 10000, 512,'sha512').toString('hex')
  return this.Hash === hash;
}

UserSchema.methods.generateJWT = function () {
  const today = new Date();
  const exp = new Date(today);
  exp.setDate(today.getDate() + 5);
  return jwt.sign({
      id: this._id,
      Username: this.Username,
      exp: parseInt(exp.getTime() / 1000)
  }, process.env.SECRET)
}

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;