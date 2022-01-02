const mongoose = require("mongoose");
const Schema = mongoose.Schema;

  const newSchema = new Schema({
    title:  {type: String, required: [true, 'Pole tytuł jest wymagane']}, 
    description: {type: String, required: [true, 'pole opis jest wymagane']}, 
    created: { type: Date, default: Date.now },
    
  });

  module.exports = mongoose.model("News", newSchema)