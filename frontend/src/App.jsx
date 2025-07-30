import React from 'react';
import { Route, Routes } from 'react-router';
import { Homepage } from "./pages/Homepage";
import { Createpage } from "./pages/Createpage";
import  NoteDetailpage  from "./pages/NoteDetailpage";
import toast from "react-hot-toast";
import './index.css';

export default function App() {
  return (
    <div>
    <Routes>
      <Route path = "/" element={<Homepage/>} />
      <Route path = "/create" element={<Createpage/>} />
      <Route path = "/notes/:id" element={<NoteDetailpage/>} />
    </Routes>
    </div>
  )
};


