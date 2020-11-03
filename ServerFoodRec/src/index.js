require('./models/User');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

const requireAuth = require('./middlewares/requireAuth');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);

const MongoUri = 'mongodb+srv://admin:admin@project0-5fxxr.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(MongoUri,{
    useNewUrlParser: true,
    useCreateIndex: true
});

mongoose.connection.on('connected', ()=>{
    console.log('Connected to mongo instance!');
});

mongoose.connection.on('error', (err)=>{
    console.log('Error in connection',err);
});

app.get('/', requireAuth, (req,res) => {
    res.send(`Your Name is: ${req.user.name}`)
});

app.listen(3000, ()=> {
    console.log('listening on port 3000');
});