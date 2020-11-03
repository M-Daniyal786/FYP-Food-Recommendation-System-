const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = (req,res,next) => {
    const {authorization} = req.headers;
    
    if(!authorization){
        return res.status(401).send({error: 'You must be loggedIn!'});    
    }
    //authorization is 'Bearer and then token asdweqDASDASEQ@#!@41'
    
    const token = authorization.replace('Bearer ','');
    jwt.verify(token, 'SECRET_KEY', async (err,payload)=>{
        if(err){
            return res.status(401).send({error: 'You must be loggedIn!'});
        }

        const {userId} = payload;

        const user = await User.findById(userId);

        req.user = user;
        next();

    });


};