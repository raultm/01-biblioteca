// MARK: App 

import { Proyecto } from "./Proyecto"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Dashboard } from "./modules/Dashboard/pages/Dashboard";
import { ErrorPage } from "./modules/ErrorPage/pages/ErrorPage";
import { Members } from "./modules/Members/pages/Members";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Proyecto />,
    // errorElement: <ErrorPage/>
    children:[
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/members",
        element: <Members />,
      },
    ]
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
