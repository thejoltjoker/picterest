import { useAuth0 } from "@auth0/auth0-react";
import { FaRightToBracket } from "react-icons/fa6";

const SidebarSignIn = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/search",
      },
    });
  };

  return (
    <button
      className="group flex items-center rounded-lg p-2 text-stone-900 hover:bg-stone-100"
      onClick={handleLogin}
    >
      <FaRightToBracket className="text-xl" />
      <span className="ms-3 flex-1 whitespace-nowrap">Sign in</span>
    </button>
  );
};
export default SidebarSignIn;
