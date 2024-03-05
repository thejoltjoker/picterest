import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
import NavbarSignIn from "./NavbarSignIn";
import NavbarSignOut from "./NavbarSignOut";

const Navbar = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <nav className="flex p-4 text-slate-800">
      <NavLink to={"/"}>
        <h2 className="font-heading font-bold">Image Search Inc.</h2>
      </NavLink>

      <div className="ml-auto flex gap-4 text-slate-500">
        {isAuthenticated && (
          <>
            <NavLink to={"/search"} className="transition hover:text-blue-500">
              Search
            </NavLink>
            <NavLink to={"/saved"} className="transition hover:text-blue-500">
              Saved
            </NavLink>
            <NavLink to={"/profile"} className="transition hover:text-blue-500">
              Profile
            </NavLink>
          </>
        )}
        {isAuthenticated ? <NavbarSignOut /> : <NavbarSignIn />}
      </div>
    </nav>
  );
};

export default Navbar;
