const mongoose=require("mongoose")
require('dotenv').config()
// DATABASE=process.env.DATABASEURL
const url= process.env.DATABASEURL;

const connect = () => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Database is connected.');
    })
    .catch((err) => {
        console.error('Error connecting to database:', err.message);
    });
};

module.exports = { connect };
