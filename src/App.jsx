import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyPosts from "./pages/MyPosts";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Register";
import EditPost from "./pages/EditPost";
import Button from "./components/UploadButton";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //     children: [
  //       { path: "/muposts", element: <MyPosts /> },
  //       { path: "/login", element: <Loginn /> },
  //       { path: "/signup", element: <Signup /> },
  //       { path: "/edit", element: <EditPost /> },
  //     ],
  //   },
  // ]);
  return (
    // <RouterProvider router={router}>
    //   <Button></Button>
    // </RouterProvider>
    <Button />
  );
}

export default App;
