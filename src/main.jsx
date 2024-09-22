import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
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
import Contact from './Pages/Contact';
import MyBookings from './Pages/MyBookings';
import Blogs from './Pages/Blogs';
import Allusers from './Pages/Admin/Allusers';
import AdminRoute from './PrivateRoute/AdminRoute';
import Payment from './Pages/Payment/Payment';
import AdminHome from './Pages/Admin/AdminHome';
import Paymentdetails from './Pages/Payment/Paymentdetails';
const queryClient = new QueryClient()

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
        path: "/contact",
        element:<Contact></Contact>
      },
      {
        path: "/bookings",
        element:<PrivateRoute><MyBookings></MyBookings></PrivateRoute>
      },
      {
        path: "/payment",
        element:<PrivateRoute><Payment></Payment></PrivateRoute>
      },
      {
        path: "/allUsers",
        element:<AdminRoute><Allusers></Allusers></AdminRoute>
      },
      {
        path: "/admin",
        element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path: "/details/:id",
        element:<CardDetails></CardDetails>,
        

      }
      ,
      {
        path: "/Paymentdetails/:id",
        element:<Paymentdetails></Paymentdetails>,
        

      }
      ,
      {
        path: "/blogs",
        element:<Blogs></Blogs>,
        

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
<div className='max-w-6xl mx-auto p-3 md:p-0 lg:p-0'>
<React.StrictMode>
   <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    
    </QueryClientProvider>
   </AuthProvider>
  </React.StrictMode>,
</div>
)
