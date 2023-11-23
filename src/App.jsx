import React from "react";
import { createBrowserRouter, RouterProvider, Route, Routes } from "react-router-dom";
import { Warning, Welcome, Game, NotFound } from "./pages";
import SharedLayout from "./layouts/SharedLayout";

const App = () => {
  const router = createBrowserRouter();

  return (
    <RouterProvider router={router}>
      <Routes>
        <Route
          path="/"
          element={<SharedLayout />}
        >
          <Route index element={<Warning />} />
          <Route path="intro" element={<Welcome />} />
          <Route path="quiz" element={<Game />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </RouterProvider>
  );
};

export default App;
