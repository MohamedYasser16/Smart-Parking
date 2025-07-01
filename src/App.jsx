
import './App.css'
import 'flowbite' ;
import InterHome from './Component/InterHome'
import AccordionUsage from './Component/Acordiation'
import Team from './Component/Team'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Layout from './Component/Layout'
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
    Router.run(router, Router.HistoryLocation, function (Handler) {
 React.render(<Handler/>, document.body);
})
  // <RouterProvider router={router}></RouterProvider>
  )
}

export default App
