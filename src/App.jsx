import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Game, Welcome, EndGame, ErrorPage } from "./pages"
import SharedLayout from './layouts/SharedLayout';


const routes = [
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      {
        index: true,
        element: <Welcome />,
      },
      {
        path: "/quiz", 
        element: <Game />,
      },
      {
        path: "/summary", 
        element: <EndGame />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
];

function App() {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default App;
