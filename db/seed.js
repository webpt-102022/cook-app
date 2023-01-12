const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const Recipe = require('../models/Recipe');
const recipes = require('../data/recipes');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL)
  .then(response => console.log(`Connected to the database ${response.connection.name}`))
  .then(() => {
    return Recipe.create(recipes)
  })
  .then(createdRecipes => console.log(`Inserted ${createdRecipes.length} recipes in the database`))
  .then(() => mongoose.connection.close())
  .catch(err => console.error(err))