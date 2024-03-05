import { createBrowserRouter } from "react-router-dom";
import { AuthenticationGuard } from "../components/AuthenticationGuard";
import Auth0ProviderLayout from "../layouts/Auth0ProviderLayout";
import MainLayout from "../layouts/MainLayout";
import SidebarLayout from "../layouts/SidebarLayout";
import CallbackPage from "../pages/CallbackPage";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import SavedPage from "../pages/SavedPage";
import SearchPage from "../pages/SearchPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth0ProviderLayout />,
    children: [
      {
        element: <MainLayout />,
        children: [{ path: "/", index: true, element: <HomePage /> }],
      },
      {
        element: <SidebarLayout />,
        children: [
          { path: "/callback", element: <CallbackPage /> },
          {
            path: "/search",
            element: <AuthenticationGuard component={SearchPage} />,
          },
          {
            path: "/saved",
            element: <AuthenticationGuard component={SavedPage} />,
          },
          {
            path: "/profile",
            element: <AuthenticationGuard component={ProfilePage} />,
          },
        ],
      },
    ],
  },
]);
