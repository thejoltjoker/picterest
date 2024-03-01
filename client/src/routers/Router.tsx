import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProfilePage from "../pages/ProfilePage";
import SavedPage from "../pages/SavedPage";
import SearchPage from "../pages/SearchPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", index: true, element: <SearchPage /> },
      { path: "/saved", index: true, element: <SavedPage /> },
      { path: "/profile", index: true, element: <ProfilePage /> },
    ],
  },
]);
