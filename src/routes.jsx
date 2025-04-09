import { Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

import Users from "./pages/Users/Users";
import Courses from "./pages/Courses/Courses";
import Articles from "./pages/Articles/Articles";
import Infos from "./pages/Infos/Infos";
import Login from "./pages/auth/Login";

export default [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Users />
      </ProtectedRoute>
    ),
  },
  {
    path: "/users",
    element: (
      <ProtectedRoute>
        <Users />
      </ProtectedRoute>
    ),
  },
  {
    path: "/courses",
    element: (
      <ProtectedRoute>
        <Courses />
      </ProtectedRoute>
    ),
  },
  {
    path: "/articles",
    element: (
      <ProtectedRoute>
        <Articles />
      </ProtectedRoute>
    ),
  },
  {
    path: "/infos",
    element: (
      <ProtectedRoute>
        <Infos />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/login" />,
  },
];
