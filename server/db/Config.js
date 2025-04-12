const express = require('express');
const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://127.0.0.1:27017/Kiran_Creation'; // Use IPv4 instead of localhost

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
   
})
.then(() => {
    console.log('Connected to MongoDB successfully');
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
});

module.exports = mongoose;