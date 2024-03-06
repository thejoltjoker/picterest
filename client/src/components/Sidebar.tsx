import { useAuth0 } from "@auth0/auth0-react";
import {
  FaCameraRetro,
  FaHeart,
  FaMagnifyingGlass,
  FaUser,
} from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { useFavoritesContext } from "../contexts/FavoritesContext";
import SidebarSignIn from "./SidebarSignIn";
import SidebarSignOut from "./SidebarSignOut";
// TODO add toggle for light/dark theme
const Sidebar = () => {
  const { user, isAuthenticated } = useAuth0();
  const { favorites } = useFavoritesContext();

  return (
    <>
      <button
        data-drawer-target="sidebar"
        data-drawer-toggle="sidebar"
        aria-controls="sidebar"
        type="button"
        className="ms-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-stone-500 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-200 sm:hidden "
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="h-6 w-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="sidebar"
        className="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full transition-transform sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="flex h-full flex-col gap-4 overflow-y-auto border-r border-stone-200 bg-stone-100 px-3 py-4">
          <ul className="space-y-2 font-medium">
            <li className="mb-8 flex h-12 items-center">
              {/* TODO Link to homepage if not signed in */}
              <Link to="/search">
                <span className="group flex items-center rounded-lg p-2 font-heading text-xl  font-bold hover:bg-stone-100">
                  <FaCameraRetro className="text-theme-400 -mt-[1px] text-xl" />
                  <span className="ms-3">Picterest</span>
                </span>
              </Link>
            </li>
            <li>
              <NavLink
                to="/search"
                className={({ isActive }) =>
                  isActive ? "text-theme-900" : "text-stone-500"
                }
              >
                <span className="group flex items-center rounded-lg p-2  hover:bg-stone-100">
                  <FaMagnifyingGlass className="text-xl" />

                  <span className="ms-3">Search</span>
                </span>
              </NavLink>
            </li>
            {isAuthenticated && (
              <li>
                <NavLink
                  to="/saved"
                  className={({ isActive }) =>
                    isActive ? "text-theme-900" : "text-stone-500"
                  }
                >
                  <span className="group flex items-center rounded-lg p-2  hover:bg-stone-100">
                    <FaHeart className="text-xl" />

                    <span className="ms-3 flex-1 whitespace-nowrap">Saved</span>
                    <span className="bg-theme-100/50 text-theme-900 ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full p-3 text-sm font-medium">
                      {favorites.length}
                    </span>
                  </span>
                </NavLink>
              </li>
            )}
            {isAuthenticated && (
              <li>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    isActive ? "text-theme-900" : "text-stone-500"
                  }
                >
                  <span className="group flex items-center rounded-lg p-2  hover:bg-stone-100">
                    <FaUser className="text-xl" />

                    <span className="ms-3 flex-1 whitespace-nowrap">
                      Profile
                    </span>
                  </span>
                </NavLink>
              </li>
            )}
            <li>
              <hr className="mx-4 my-4 border-stone-200" />
            </li>
            <li>{isAuthenticated ? <SidebarSignOut /> : <SidebarSignIn />}</li>
          </ul>
          {isAuthenticated && (
            <div className="flex">
              <img
                src={user?.picture}
                alt=""
                className="me-2 size-10 rounded-full border border-stone-400"
              />
              <div className="flex flex-col justify-center">
                <p className="text-sm font-bold">
                  {user?.name} {user?.family_name}
                </p>
                <p className="text-xs opacity-50">{user?.email}</p>
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
