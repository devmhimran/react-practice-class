// import NewComponent from "./Component/NewComponent";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Post from "./pages/Post/Post";
import User from "./pages/User/User";
import Dashboard from "./pages/Dashboard/Dashboard";
import SinglePost from "./pages/SinglePost/SinglePost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "dashboard",
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "post",
        element: <Post />,
      },
    ],
  },
  {
    path: "/User",
    element: <User />,
  },
  {
    path: "/post/:id",
    element: <SinglePost />,
  },
]);

export default function App() {
  // eslint-disable-next-line no-unused-vars
  const array = ["john", "doe", "smith"];
  // eslint-disable-next-line no-unused-vars
  const arrayOfObject = [
    { name: "John", email: "john@example.com" },
    { name: "Doe", email: "doe@example.com" },
    { name: "smith", email: "smith@example.com" },
    { name: "smith", email: "" },
  ];

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
