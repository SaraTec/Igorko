const express = require('express');
const router = express.Router();

const Item = require('../../Models/Item')
const Category = require('../../Models/Category')

// @route   GET api/item/create
// @desc    Test route
// @access  Public
router.get('/create', async (req, res) => {
  try {
    const newItem1 = new Item({
      name: "Фух останнє",
      category: "63bddd7c947076c3b0e39a47",
      shortname: "Інший товар",
      description: "Норм товар",
      price: "10$",
      picture: "https://place-hold.it/300x300/c00/fff?text=всьо&fontsize=23"
    })
    
    const item = await newItem1.save();
    
    res.json(item);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error')
  }
})

// @route   GET api/item/:category_id
// @desc    Test route
// @access  Public
router.get('/random', async (req, res) => {
  try {
    const categories = await Category.find();
    const random_category =  categories[Math.floor(Math.random() * categories.length)];
    const items = await Item.find({ category: random_category._id });
    res.json([random_category.name, ...items]);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error')
  }
})

// @route   GET api/item/:category_id
// @desc    Test route
// @access  Public
router.get('/:category_id', async (req, res) => {
  try {
    const items = await Item.find({ category: req.params.category_id });
    console.log("req.category_id = ", req.category_id)
    console.log("items = ", items)
    res.json(items);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error')
  }
})

module.exports = router;