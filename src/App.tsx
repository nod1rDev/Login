import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./Root";
import SignInSide from "./Login";
import SignUp from "./SignUp";
import Products from "./Products";
import Prodected from "./Protected";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/login",
        element: <SignInSide />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/product",

        element: (
          <Prodected>
            <Products />
          </Prodected>
        ),
      },
    ],
  },
]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
