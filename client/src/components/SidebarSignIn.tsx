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
      className="group flex w-full items-center rounded-lg p-2 text-left text-stone-900 hover:bg-stone-200 dark:text-stone-400 hover:dark:bg-zinc-800"
      onClick={handleLogin}
    >
      <FaRightToBracket className="text-xl" />
      <span className="ms-3 flex-1 whitespace-nowrap">Sign in</span>
    </button>
  );
};
export default SidebarSignIn;
