import { Warning, Welcome, Game, NotFound } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SharedLayout from "./layouts/SharedLayout";

// import './styles/reset.css';
// import './styles/variables.css';
// import './components/styles/Carousel.css'
// import './components/styles/CounterUI.css'
// import './components/styles/Filmbar.css'
// import './components/styles/Hint.css'
// import './components/styles/ScoreUI.css'
// import './components/styles/sharedUI.css'
// import './components/styles/Showcase.css'
// import './components/styles/SocialLink.css'
// import './components/styles/SpinningLetters.css'
// import './components/styles/CounterUI.css'
// import './components/styles.css'

const routes = [
  {
    path: "/",
    children: [
      {
        index: true,
        element: process.env.REACT_APP_START_PAGE === "warning" ? <Warning /> : <Welcome />,
      },
      {
        path: "intro",
        element: <Welcome />,
      },
      {
        path: "quiz",
        element: (
          <>
            <SharedLayout />
            <Game />
          </>
        ),
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
