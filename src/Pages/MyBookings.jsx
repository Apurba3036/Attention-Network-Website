import  { useContext, useEffect, useState } from 'react';
import { AuthContext } from './../Providers/AuthProvider';
import Table from '../Components/Table';
import {getToken, onMessage } from "firebase/messaging";
import { Link, useNavigate } from 'react-router-dom';
import { messaging } from '../firebase/firebase.config';
import axios from 'axios';
import PayemntTable from '../Components/PayemntTable';


const MyBookings = () => {
    const {user}=useContext(AuthContext);
    const [bookings,setBookings]=useState([]);
    const [payments,setPayments]=useState([]);
    const navigate=useNavigate();
  //notification permission

// useEffect(() => {
//     const checkNotificationPermission = async () => {
//         const permission = await Notification.requestPermission();
//         if (permission === "granted") {
//             const token = await getToken(messaging, { vapidKey: "BCg24Vmq6YgukPimod1cnpkbt1YHMDLRKuM6RKrRlTzzzJdhg11nPDVEqkM849te3bLhtuV2UQqgZkUl7E4m2Q8" });
//             if (token) {
//                 console.log('Token generated:', token);
//                 console.log(user.email);
                
//                 // Send token to server
//                 fetch(`http://localhost:5000/users/savetoken/${user.email}`, {
//                     method: 'PATCH',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify({ token })
//                 })
//                 .then(res => res.json())
//                 .then(data => {
//                     console.log('Token saved to server:', data);
//                 })
//                 .catch(error => {
//                     console.error('Error saving token to server', error);
//                 });
//             }
//         } else {
//             console.log('Permission denied');
//         }
//     };

//     checkNotificationPermission();
// }, []);

  








    const url=`http://localhost:5000/bookings?email=${user.email}`;
    
    useEffect(()=>{
      fetch(url,{
        method:'GET',
        headers:{
          authorization:`Bearer ${localStorage.getItem('Access_token')}`
        }
      })
      .then(res=>res.json())
      .then(data=>{
        if(!data.error){
          setBookings(data)
        }
        else{
          alert('user token expired');
          navigate('/')
        }
      });
    },[url,navigate])



    const urlpayment=`http://localhost:5000/paymentdetails?email=${user.email}`;

    useEffect(()=>{
      fetch(urlpayment,{
        method:'GET',
        headers:{
          authorization:`Bearer ${localStorage.getItem('Access_token')}`
        }
      })
      .then(res=>res.json())
      .then(data=>{
        if(!data.error){
          setPayments(data)
          console.log(payments);
        }
        else{
          alert('user token expired');
          navigate('/')
        }
      });
    },[urlpayment,navigate])
    
    
  const handleDelete=id=>{
      const procced=confirm('Are u sure want to delete this?');
      if (procced){
       
        fetch(`http://localhost:5000/bookings/${id}`,{
          method: 'DELETE'
        })
        .then(res=>res.json())
        .then(
          data=>{console.log(data)
        if(data.deletedCount>0){
             const remaining=bookings.filter(booking=>booking._id!==id);
             setBookings(remaining);
        }
        }
      )
      }
    }

    const totalprice=bookings.reduce((total, booking) => total + booking.price, 0);
    

    return (
    <div>
      <div className="hero md:h-96" style={{ backgroundImage: `url("https://burst.shopifycdn.com/photos/photography-product-download.jpg?width=1000&format=pjpg&exif=0&iptc=0")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="p-5 mt-10">
                        <h1 className="mb-5 text-5xl font-bold">Welcome {user.displayName}</h1>
                        <p className="mb-5">Check Your Bookings </p>
                   
                    </div>
                </div>
            </div>
       <div className='mt-5'>
        <h2 className='font-bold text-2xl'>Total Price:{totalprice}</h2>
       </div>
    <div className="overflow-x-auto mt-3">
  <table className="table">
    {/* head */}
    <thead>
     
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>User</th>
        <th>Service </th>
        <th>Contact Information</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
    {bookings.length > 0 ? (
    bookings.map(booking => (
      <Table key={booking._id} handleDelete={handleDelete} booking={booking}></Table>
    ))
  ) : (
    <tr>
      <td colSpan="5">You have not booked yet.</td>
    </tr>
  )}
    
      
    </tbody>
   
   
    
  </table>

  <Link
          to="/payment"
          state={{ totalprice, bookings }}
          className="btn btn-warning mt-5 mb-3"
        >
          Payment
        </Link>
 
 <div className='text-center font-semibold mt-5 text-orange-400'> <h1>Payment History</h1></div>
  <table className="table mt-5">
    {/* head */}
    <thead>
     
      <tr>
        <th>
         <th>Transaction ID</th>
        </th>
        <th>Total Payment</th>
        <th>Services</th>
        <th>Contact Info</th>
    
        <th>Date</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
    {payments.length > 0 ? (
    payments.map(payment => (
      <PayemntTable key={payment._id} payment={payment}></PayemntTable>
    ))
  ) : (
    <tr>
      <td colSpan="5">You have not booked yet.</td>
    </tr>
  )}
    
      
    </tbody>
   
   
    
  </table>
 
       
</div>
</div>
    );
};

export default MyBookings;