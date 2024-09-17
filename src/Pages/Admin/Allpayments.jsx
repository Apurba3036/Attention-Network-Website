import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import PayemntTable from '../../Components/PayemntTable';

const Allpayments = () => {
    const [payments,setPayments]=useState([]);
    const {user}=useContext(AuthContext);
 

    const navigate=useNavigate();

    const urlpayment=`http://localhost:5000/payments`;

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

    return (
        <div className='mt-9'>
            <div className='text-center text-2xl font-semibold mt-5 text-orange-400'> <h1>Payments History</h1></div>
  <table className="table mt-5">
    {/* head */}
    <thead>
     
      <tr>
        <th>
         <th>Transaction ID</th>
        </th>
        <th>Total Payment</th>
        <th>Services</th>
        <th>Email</th>
    
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
    );
};

export default Allpayments;