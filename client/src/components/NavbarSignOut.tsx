import { useAuth0 } from "@auth0/auth0-react";

const NavbarSignOut = () => {
  const { logout } = useAuth0();

  const handleLogout = async () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  return <button onClick={handleLogout}>Sign out</button>;
};
export default NavbarSignOut;
