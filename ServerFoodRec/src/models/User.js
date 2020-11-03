const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({


    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }

});

userSchema.pre('save', function(next){
    const user = this; 

    if (!user.isModified('password')){
        return next();
    }

    //salt is to secure from rainbow table attack
    //salt is random string/int of charachter concatenated in the original hash 
    bcrypt.genSalt(10,(err,salt)=>{ 
        if (err){
            return next(err);
        }

        bcrypt.hash(user.password,salt,(err,hash)=>{
            if(err){
                return next(err);
            }
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function comparePassword(candidatePassword){
    
    const user = this;

    return new Promise((resolve, reject)=>{
        bcrypt.compare(candidatePassword, user.password, (err, isMatch) =>{
            if(err){
                return reject(err);
            }
            if(!isMatch){
                return reject(false);
            }
            resolve(true);
        });
    });
}

mongoose.model('User',userSchema);