const express = require('express');
require('./db/Config'); // Import the database configuration
const app = express();
const PORT = 5000;
const Contact = require('./db/Contact'); // Import the Contact model

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

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 