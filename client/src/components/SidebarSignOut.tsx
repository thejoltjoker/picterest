import { useAuth0 } from "@auth0/auth0-react";
import { FaRightFromBracket } from "react-icons/fa6";

const SidebarSignOut = () => {
  const { logout } = useAuth0();

  const handleLogout = async () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  return (
    <button
      className="group flex items-center rounded-lg p-2 text-stone-900 hover:bg-stone-100"
      onClick={handleLogout}
    >
      <FaRightFromBracket className="text-xl" />
      <span className="ms-3 flex-1 whitespace-nowrap">Sign out</span>
    </button>
  );
};
export default SidebarSignOut;
