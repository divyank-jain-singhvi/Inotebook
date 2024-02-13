const { default: mongoose } = require('mongoose');
const mongos = require('mongoose');
const mongoURI = 'mongodb://localhost:27017';

const connectToMongo=()=>{
    mongoose.connect(mongoURI);
    console.log('DB connected');
}
module.exports=connectToMongo;