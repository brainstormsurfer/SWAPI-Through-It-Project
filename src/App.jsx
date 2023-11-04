import { Game, Welcome, NotFound } from "./pages";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import SharedLayout from "./layouts/SharedLayout";
import Warning from "./pages/Warning";

const routes = [
  {
    index: true,
    element: <Warning />,
  },
  {
    path: "intro",
    element: <Welcome />,
  },
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      {
        path: "/quiz",
        element: <Game />,
      },      
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

function App() {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}

export default App;