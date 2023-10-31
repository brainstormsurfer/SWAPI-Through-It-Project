import { Game, Welcome, EndGame, ErrorPage } from "./pages"
import { BrowserRouter as Router, createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router-dom";


import SharedLayout from './layouts/SharedLayout';


// const routes = [
//   {
//     path: "/",
//     element: <SharedLayout />,
//     children: [
//       {
//         index: true,
//         element: <Welcome />,
//       },
//       {
//         path: "/quiz",
//         element: <Game />,
//       },
//       {
//         path: "/summary",
//         element: <EndGame />,
//       },
//       {
//         path: "*",
//         element: <ErrorPage />,
//       },
//     ],
//   },
// ];


function App() {  

const router = createBrowserRouter(
    createRoutesFromElements(    
  <Route path="/" element={<SharedLayout />}>
      <Route index element={<Welcome />} />
      <Route path="quiz" element={<Game />} />
      <Route path="summary" element={<EndGame />} />          
      <Route path="*" element={<ErrorPage />} />
    </Route>
    )
  ) 
  return  ( 
  <RouterProvider router={router} /> 
  )
}

export default App;



//   const router = createBrowserRouter(routes);
//   return <RouterProvider router={router} />;  
// }

// const router = createBrowserRouter(
//     createRoutesFromElements(
//         <Routes>
//         <Route path="/" element={<Game />}>        
//           <Route index element={<Welcome />} />
//           <Route path="summary" element={<EndGame />} />
//           <Route path="quiz" element={<Game />} />
//         </Route>
//           <Route path="*" element={<ErrorPage />} />
//         </Routes>
//       )
//     )
    // function App() {
    //    router = createBrowserRouter(
    // createRoutesFromElements(
    //   <Route path="/" element={<Game />}>        
    //   //       <Route index element={<Welcome />} />
    //   //       <Route path="summary" element={<EndGame />} />
    //   //       <Route path="quiz" element={<Game />} />
    //   //     </Route>
    //       ))



    
// <RouterProvider router={router} />

// function App() {
// return(
//   <Router>
//   <Routes>
//     <Route index element={<Welcome />} />
//     <Route path="quiz" element={<Game />} />        
//     <Route path="summary" element={<EndGame />} />          
//     <Route path="*" element={<ErrorPage />} />
//   </Routes>
//   </Router>

// ) 
// }

// export default App;