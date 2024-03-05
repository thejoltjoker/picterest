import { useAuth0 } from "@auth0/auth0-react";
import Button from "./Button";

const SignInButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/search",
      },
    });
  };

  return <Button onClick={handleLogin}>Sign in</Button>;
};
export default SignInButton;
