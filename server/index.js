const express = require('express');
require('./db/Config'); // Import the database configuration
const app = express();
const PORT = 5000;
const Contact = require('./db/Contact'); // Import the Contact model
const cors = require('cors');

app.use(cors())


app.use(express.json());
app.get('/',(req,res)=>{
    
});
// POST route to add contact info
app.post('/contact', async (req, res) => {
    try {
        const contact = new Contact(req.body); // Create a new document
        const result = await contact.save(); // Save it to the database
        res.status(201).send({ message: 'Contact added successfully', data: result });
    } catch (error) {
        res.status(500).send({ message: 'Error adding contact', error: error.message });
    }
});

app.get('/cont_det', async (req, res) => {
    try {
        const contact = await Contact.find(); // Create a new document
        res.status(201).send(contact);
    } catch (error) {
        res.status(500).send({ message: 'Error adding contact', error: error.message });
    }
});

app.post('/cont_upd', async (req, res) => {
    try {
        const contact = await Contact.updateOne({ message: req.body.message }, { $set: { "approve": true }}); // Update a document
        res.status(200).send({ message: 'Contact updated successfully', data: contact });
    } catch (error) {
        res.status(500).send({ message: 'Error updating contact', error: error.message });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 
