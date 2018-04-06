import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

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
}

export type AuthToken = {
    accessToken: string,
    kind: string
  };

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, unique: true },
    password: String,
    passwordResetToken: String,
    email: { type: String, unique: true },
    firstName:String,
    lastName:String,

    facebook: String,
    twitter: String,
    tokens: Array
});

UserSchema.pre('save', (next: any) => {
    const user = this;

    bcrypt.genSalt(8, (err: any, salt: any)=> {
        if(err){
            return next();
        }

        bcrypt.hash(user.password, salt, (err: mongoose.Error, hash: any) => {
            if (err) {
                return next(err);
              }
              user.password = hash;
              next();
        } )
    })
})

/**
 * Password hash middleware.
 */

UserSchema.methods.comparePassword = (candidatePassword: string, cb: (err: any, isMatch: any) => {}) => {
    bcrypt.compare(candidatePassword, this.password, (err: mongoose.Error, isMatch: boolean) => {
        cb(err, isMatch);
      })
};

// export const User: UserType = mongoose.model<UserType>('User', userSchema);
export const User = mongoose.model("User", UserSchema);


