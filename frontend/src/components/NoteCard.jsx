import { PenSquareIcon, Trash2Icon } from 'lucide-react';
import { Link } from "react-router";
import { formatDate } from "../lib/utils";
import axios from "axios";
import toast from "react-hot-toast";

const NoteCard = ({note, setNotes}) => {
  const handleDelete = async (e, id) => {
    e.preventDefault(); // get rid of the navigation behaviour

      if (!window.confirm("Are you sure you want to delete this note?")) return;

      try {
        await axios.delete(`http://13.201.74.231:5001/api/notes/${id}`);
        setNotes((prev) => prev.filter(note=> note._id !== id)) // getting rid of deleted one formt he array
        toast.success("Note deleted successfully");
      } catch (error) {
        console.log("Error in handleDelete", error);
        toast.error("Failed to delete note");
      }
      //can navigate to homepage again but it will send another request and flicker
    };

  return (
    <Link to={`/notes/${note._id}`}
      className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-black"
    >
      <div className="card-body">
        <h3 className="card-title text-base-content">{note.title}</h3>
        <p className="text-base-content/70 line-clamp-3">{note.content}</p>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-base-content/60">
            {formatDate(new Date(note.createdAt))}
          </span> 
          <div className="flex items-center gap-1">
              <PenSquareIcon className="size-4" />
            <button className="btn btn-ghost btn-xs text-error">
              <Trash2Icon className="size-3" onClick={ (e) => handleDelete(e,note._id)}/>
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
};

export default NoteCard;