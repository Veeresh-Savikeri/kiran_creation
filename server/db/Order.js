const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true,
    },
    sides: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    corners:{
        type: String,
    
    },
    price: {
        type: String,
        required: true,
    },
    product_image: {
        type: String,
        required: true,
    },
    name:{
        type: String,
    },
    phone: {
        type: Number,
    },
    address: {
        type: String,
    },
    payment: {
        type: Boolean,   
    },
    password: {
        type: String,
        required: true,
    },
    approved: {
        type: Boolean,
        required: true,
    },
    delivered: {
        type: Boolean,
        required: true
    },
    deliver_date: {
        type: String,
    },
   
},{timestamps: true});

module.exports = mongoose.model('orders', orderSchema);