const express = require('express')


const FormSchema = require('../models/addProduct')


const router = express();


//Get All
router.get('/api/form/', async (req, res) => {
    const findForm = await FormSchema.find();
    res.json(findForm)
})


//Get Single
router.get('/api/form/:id', async (req, res) => {
    const findForm = await FormSchema.findById(req.params.id);
    res.json(findForm)
})

//get 3

router.get('/api/getThreeDocuments', async (req, res) => {
    try {
      
  
        const documents = await FormSchema.aggregate([
            { $sample: { size: 3 } }
        ]);
      
      res.json(documents);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// Update
router.patch('/api/form/:id', async (req, res) => {
    const { id } = req.params;  // Corrected line
    await FormSchema.updateOne({ _id: id }, req.body)  // Using _id instead of id
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error));
});


//Create
router.post('/api/form', async (req, res) => {
    const form = new FormSchema({ ...req.body });
    await form.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})


//Delete
router.delete('/api/form/:id', async (req, res) => {
    const { id } = req.params.id
    await FormSchema.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})




module.exports = router