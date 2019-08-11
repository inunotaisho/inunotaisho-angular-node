import * as mongoose from 'mongoose';
import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';

export type UserModel = mongoose.Document & {
  email: string,
  password: string,
  passwordResetToken: string,
  passwordResetExpires: Date,

  facebook: string,

  tokens: AuthToken[],

  profile: {
    name: string,
    gender: string,
    location: string,
    website: string,
    picture: string
  },

  comparePassword: (candidatePassword: string, cb: (err: any, isMatch: any) => {}) => void
};

export interface AuthToken {
  accessToken: string;
  kind: string;
}

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, unique: true },
  password: String,
  passwordResetToken: String,
  email: { type: String, unique: true },
  firstName: String,
  lastName: String,

  facebook: String,
  twitter: String,
  tokens: Array
});

UserSchema.methods.setPassword = (password) => {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

UserSchema.methods.comparePassword = function(password) {
  const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash === hash;
};

/**
 * Password hash middleware.
 */

UserSchema.methods.generateJWT = () => {
  const today = new Date();
  const exp = new Date(today);
  exp.setDate(today.getDate() + 5);
  return jwt.sign({
    id: this._id,
    username: this.username,
    exp: exp.getTime() / 1000
  }, process.env.SECRET);
};


// export const User: UserType = mongoose.model<UserType>('User', userSchema);
export const User = mongoose.model('User', UserSchema);


