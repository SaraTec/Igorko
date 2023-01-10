const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category'
  },
  name: {
    type: String
  },
  shortname: {
    type: String
  },
  notes: {
    type: String
  }
});

module.exports = Category = mongoose.model('category', CategorySchema)