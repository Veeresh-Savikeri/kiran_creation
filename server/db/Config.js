const express = require('express');
const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://localhost:27017/Kiran_Creation'; // Replace with your MongoDB URI

// Connect to MongoDB
mongoose.connect(MONGO_URI,)
.then(() => {
    console.log('Connected to MongoDB successfully');
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
});

module.exports = mongoose;