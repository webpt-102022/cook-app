const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipeSchema = new Schema({
  name: {
    type: String,
    required: [true, 'You must introduce a recipe name']
  },
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'advanced'],
    default: 'medium'
  },
  ingredients: {
    type: [String]
  },
  people: {
    type: Number,
    default: 2
  },
  image: {
    type: String,
    required: [true, 'Please introduce an image of this recipe']
  },
  description: {
    type: String,
    required: [true, 'Please add a description of how to cook the recipe']
  }
},
  {
    timestamps: true
  });

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;