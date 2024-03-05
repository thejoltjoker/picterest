import { Outlet } from "react-router-dom";
import { Auth0ProviderWithNavigate } from "../components/Auth0ProviderWithNavigate";

const Auth0ProviderLayout = () => {
  return (
    <Auth0ProviderWithNavigate>
      <Outlet />
    </Auth0ProviderWithNavigate>
  );
};

export default Auth0ProviderLayout;
