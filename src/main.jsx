import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Layout/Main';
import Home from './Pages/Home';
import Detalis from './Pages/Detalis';
import CardDetails from './Components/CardDetails';
import Aboutus from './Pages/Aboutus';
import Team from './Pages/Team';

import LoginPage from './Pages/LoginPage';
import Signup from './Pages/Signup';
import AuthProvider from './Providers/AuthProvider';
import CheckOut from './Pages/CheckOut';
import OurServices from './Pages/OurServices';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "/details",
        element:<Detalis></Detalis>
      },
      {
        path: "/about",
        element:<Aboutus></Aboutus>
      },
      {
        path: "/member",
        element:<Team></Team>
      },
      {
        path: "/login",
        element:<LoginPage></LoginPage>
      },
      {
        path: "/signup",
        element:<Signup></Signup>
      },
      {
        path: "/services",
        element:<OurServices></OurServices>
      },
      {
        path: "/details/:id",
        element:<CardDetails></CardDetails>,
        

      }
      ,
      {
        path: "/checkout/:id",
        element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
<div className='max-w-6xl mx-auto'>
<React.StrictMode>
   <AuthProvider>
    <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
</div>
)
