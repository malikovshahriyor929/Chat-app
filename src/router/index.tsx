import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import SignIn from "../pages/signIn";
import SignUp from "../pages/signUp";
import MainLayout from "../layout";
import ProtecRoute from "../components/protectRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <ProtecRoute>
            <Home />
          </ProtecRoute>
        ),
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
]);
