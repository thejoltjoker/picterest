import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return (
    <nav className="flex p-4 text-slate-800">
      <h2 className="font-heading font-bold">Image Search Inc.</h2>

      <div className="ml-auto flex gap-4 text-slate-500">
        <NavLink to={"/"} className="transition hover:text-blue-500">
          Search
        </NavLink>
        {isAuthenticated && (
          <NavLink to={"/saved"} className="transition hover:text-blue-500">
            Saved
          </NavLink>
        )}
        {isAuthenticated ? (
          <a
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
            className="cursor-pointer transition hover:text-blue-500"
          >
            Sign out
          </a>
        ) : (
          <a
            onClick={(e) => {
              e.preventDefault();
              loginWithRedirect();
            }}
            className="cursor-pointer text-blue-500 transition hover:text-blue-600"
          >
            Sign in
          </a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
