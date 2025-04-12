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
        let flag = false;
        const db_cont = await Contact.find();
        for(let i=0;i<db_cont.length;i++){
            if(db_cont[i].message == req.body.message){
                flag = false;
                res.status(400).send({ message: 'Contact already exists' });
                return;
            }
            flag = true;
        }
        if(flag == true){
            const contact = new Contact(req.body); // Create a new document
            const result = await contact.save();
            res.status(201).send({ message: 'Contact added successfully', data: result });
        }
        // Save it to the database
       
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
