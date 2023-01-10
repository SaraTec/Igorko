const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'item'
  },
  category: {
    type: String
  },
  name: {
    type: String
  },
  shortname: {
    type: String
  },
  description: {
    type: String
  },
  price: {
    type: String
  },
  picture: {//https://place-hold.it/300x300/c00/fff?text=Product%20One&fontsize=23
    type: String
  }
});

module.exports = Item = mongoose.model('item', ItemSchema)