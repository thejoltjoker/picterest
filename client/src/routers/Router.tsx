import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import SearchPage from "../pages/SearchPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", index: true, element: <SearchPage /> }
    ],
  },
]);