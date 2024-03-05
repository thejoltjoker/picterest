import { useAuth0 } from "@auth0/auth0-react";

const NavbarSignIn = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/search",
      },
    });
  };

  return <button onClick={handleLogin}>Log In</button>;
};

export default NavbarSignIn;
