import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layouts/Main';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Stats from './pages/Stats/Stats';
import Marketing from './pages/Marketing/Marketing';
import Finance from './pages/Finance/Finance';
import Orders from './pages/Orders/Orders';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "signup",
        element: <SignUp />
      },
      {
        path: "orders",
        element: <Orders />
      },
      {
        path: "finance",
        element: <Finance />
      },
      {
        path: "marketing",
        element: <Marketing />
      },
      {
        path: "stats",
        element: <Stats />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
