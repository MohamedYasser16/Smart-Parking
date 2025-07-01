import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import 'flowbite' ;
import InterHome from './Component/InterHome'
import AccordionUsage from './Component/Acordiation'
import Team from './Component/Team'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Component/Layout'
import Ansys from './Component/Ansys'
import MemberDetails from './Component/MemberDetails'



const router = createBrowserRouter([
  { path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <InterHome /> },
      { path: "/project", element: <AccordionUsage /> },
      { path: "/team", element: <Team /> },
      { path: "/team/:id", element: <MemberDetails /> },
    ] },
]);

function App() {

  return (
  <RouterProvider router={router}></RouterProvider>
  )
}

export default App
