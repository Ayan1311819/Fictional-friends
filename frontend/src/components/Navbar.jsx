import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl p-2">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary font-mono tracking-tight ">
            Notes
          </h1>
          <div className="flex items-center gap-4">
            <Link to={`/create`} className="btn btn-primary btn-sm">
              <PlusIcon className="size-4" />
              <span>New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
