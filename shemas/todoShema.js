const mongoose = require('mongoose');
const connectDB = require('../connectDB');

const TodoShema = mongoose.Schema({
    title: {
      type: String,
      required: true
      },
    starred: {
      type: Boolean,
      required: true
      },
    done: {
      type: Boolean,
      required: true
      },
    });
  
  const Todos = module.exports = mongoose.model('Todos', TodoShema);
