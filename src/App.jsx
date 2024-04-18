import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FormAdd from "./FormAdd";
import FormDetail from "./FormDetail";
import Home from "./Home";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import RootLayout from "./layouts/RootLayout";
import Login from "./Login";
import Logout from "./Logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <DashboardLayout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/logout",
            element: <Logout/>,
          },
          {
            path: "/form/:slug",
            element: <FormDetail />,
          },
          {
            path: "/form-add",
            element: <FormAdd />,
          },
        ],
      },
      {
        element: <AuthLayout />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
