const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
    },
    message: {
        type: String,

    },
}, { timestamps: true });
const Contact = mongoose.model('contacts', contactSchema);
module.exports = Contact;