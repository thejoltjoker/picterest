import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const {
    loginWithRedirect,
    logout,
    // isAuthenticated
  } = useAuth0();
  const isAuthenticated = true;
  return (
    <nav className="flex p-4 text-slate-800">
      <NavLink to={"/"}>
        <h2 className="font-heading font-bold">Image Search Inc.</h2>
      </NavLink>

      <div className="ml-auto flex gap-4 text-slate-500">
        {isAuthenticated && (
          <>
            <NavLink to={"/saved"} className="transition hover:text-blue-500">
              Saved
            </NavLink>
            <NavLink to={"/profile"} className="transition hover:text-blue-500">
              Profile
            </NavLink>
          </>
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
          <Button
            onClick={(e) => {
              e.preventDefault();
              loginWithRedirect();
            }}
          >
            Sign in
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
