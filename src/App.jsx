import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import AuthLayout from "./AuthLayout";
import Login from "./Login";
import RootLayout from "./RootLayout";
import DashboardLayout from "./DashboardLayout";

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
