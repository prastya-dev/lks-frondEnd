import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import Dashboard from "./Dashboard";
import HomePage from "./HomePage";
import Login from "./Login";
import RootLayout from "./RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
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
