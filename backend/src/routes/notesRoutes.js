import express from "express"
import Note from '../Models/Note.js';

const router = express.Router()

router.get("/", async(req,res)=>{ //logic in each can be made modular as well putting it in controller file. 
    try{
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
    } catch(error) {
        console.error("Error in getall ", error);
        req.status(500).json({message: "Internal server error"});
    }
})

router.get("/:id", async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json(note);
  } catch (error) {
    console.error("Error fetching note by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/:id/friend", async (req, res) => {
    
      return res.status(200).json({ message: "Demo AI Fictional Friend" });
      console.log("AI Friend demo");
    
});

router.post("/", async(req,res)=>{
    try{
    const {title,content} = req.body; // help of middleware 
    const newNote = new Note({title, content});
    await newNote.save();
    res.status(201).json({message: "New note created"});
    } catch(error){
        console.error("Error in creating notes", error);
        res.status(500).json({message: "Internal server error"});
    }
})

router.put("/:id", async(req,res)=>{
    try{
        const {title,content}  = req.body;
        const updatednote = await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true});
        //handling id that doesn't exist
        if(!updatednote){
            return res.status(404).json({message: "Note not found"});
        }
        res.status(200).json({message: "Note updated"});
    } catch(error) {
        console.error("Error in updating notes", error);
        res.status(500).json({message: "Internal server error"});
    }
})

router.delete("/:id", async(req,res)=>{
    try{
    const deleteNote = await Note.findByIdAndDelete(req.params.id);
    if(!deleteNote) return res.status(400).json({message:"Note not found"});
    res.status(200).json({message: "Post deleted successfully"});
    }catch(error){
        //can add rate limting
        console.error("Error in deleting notes", error);
        res.status(500).json({message: "Internal server error"});
    }
})

export default router; 
