const express = require('express');
const router = express.Router();

const Category = require('../../Models/Category')

// @route   GET api/сategory
// @desc    Test route
// @access  Public
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find().populate('user', ['name', 'avatar']);
    res.json(categories);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error')
  }
})

// @route   GET api/сategory/create
// @desc    Test route
// @access  Public
router.get('/create', async (req, res) => {
  try {
    const newCategory1 = new Category({
      name: "Категорія 4",
      shortname: "Лайт категорія 4",
      notes: "Зашибізььь"
    })
    
    console.log("CREATE CATEGORY = ", newCategory1)
    const category = await newCategory1.save();
    
    res.json(category);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error')
  }
})

module.exports = router;