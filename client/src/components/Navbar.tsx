import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex p-4 text-slate-800">
      <h2 className="font-heading font-bold">Image Search Inc.</h2>
      <div className="ml-auto flex gap-4 text-slate-500">
        <NavLink to={"/"} className="transition hover:text-blue-500">
          Search
        </NavLink>
        <NavLink to={"/"} className="transition hover:text-blue-500">
          Saved
        </NavLink>
        <NavLink to={"/"} className="transition hover:text-blue-500">
          Sign out
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
