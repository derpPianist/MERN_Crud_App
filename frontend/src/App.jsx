import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import User from "./getUser/User";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import AddUser from "./addUser/AddUser";
import Update from "./updateUser/Update";


function App() {
  
  const route = createBrowserRouter([
    { path: "/",
      element: <User />
    },
    {
      path: "/add",
      element: <AddUser />
    },
    {
      path: '/update/:id',
      element: <Update />
    }

  ])

  return (
    <div className="App">
      <RouterProvider router={route} />
    </div>
  )
}

export default App
