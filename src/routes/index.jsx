import { useRoutes } from "react-router-dom";

// Import pages
import MainPage from "../pages/main";
import LoginPage from "../pages/login";

const routes = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: (
      <div className="flex justify-center items-center">
        <p className="text-2xl font-bold">404 - Page Notfound</p>
      </div>
    ),
  },
];

export default function AppRoutes() {
  return useRoutes(routes);
}
