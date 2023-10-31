import { Game, Welcome, ErrorPage } from "./pages";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import SharedLayout from "./layouts/SharedLayout";

const routes = [
  {
    index: true,
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
    element: <ErrorPage />,
  },
];

function App() {

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}

export default App;