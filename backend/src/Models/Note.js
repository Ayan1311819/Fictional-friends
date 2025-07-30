import mongoose from "mongoose";

// 1- create schema
// 2- create model based on that schema

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
}, { timestamps: true }); // ✅ fixed typo

const Note = mongoose.model('Note', noteSchema);

export default Note;

