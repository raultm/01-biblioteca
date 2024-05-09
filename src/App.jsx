// MARK: App 

import { Proyecto } from "./Proyecto"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Dashboard } from "./modules/Dashboard/pages/Dashboard";
import { ErrorPage } from "./modules/ErrorPage/pages/ErrorPage";
import { ErrorDashboardPage } from "./modules/ErrorPage/pages/ErrorDashboardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Proyecto />,
  //  errorElement: <ErrorPage/>
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
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
