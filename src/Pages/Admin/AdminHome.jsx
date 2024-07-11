import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Chart from './PaymentChart';
import PaymentChart from './PaymentChart';
import axios from 'axios';

const AdminHome = () => {
  const {user}=useContext(AuthContext);
  const [notification, setNotification] = useState({ userId: '', title: '', body: '' });
    const {data: stats={}}=useQuery({
        queryKey:['admin-stats'],
        queryFn: async()=>{
            const res=await fetch('http://localhost:5000/admin-stats');
            return res.json();
        }
    })


      
  
      const handleInputChange = (e) => {
          const { name, value } = e.target;
          setNotification((prevNotification) => ({
              ...prevNotification,
              [name]: value
          }));
      };
  
      const sendNotification = async (e) => {
          e.preventDefault();
          try {
              await axios.post('http://localhost:5000/api/send-notification', notification);
              alert('Notification sent successfully');
          } catch (error) {
              console.error('Error sending notification', error);
              alert('Failed to send notification');
          }
      };
    return (
        <div>
            <div className="hero md:h-96" style={{ backgroundImage: `url("https://burst.shopifycdn.com/photos/photography-product-download.jpg?width=1000&format=pjpg&exif=0&iptc=0")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="p-5 mt-10">
                        <h1 className="mb-5 text-5xl font-bold">Welcome {user.displayName}</h1>
                        <p className="mb-5">Check Admin Panel</p>
                   
                    </div>
                </div>
            </div>

            <div className='flex align-middle justify-center mt-5 mb-5'>
  <div className="stats shadow text-center">
    <div className="stat">
      <div className="stat-figure text-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block h-8 w-8 stroke-current">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
      </div>
      <div className="stat-title">Revenue</div>
      <div className="stat-value text-primary">{stats.revenue} ৳</div>
      <div className="stat-desc">21% more than last month</div>
    </div>

    <div className="stat">
      <div className="stat-figure text-secondary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block h-8 w-8 stroke-current">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      </div>
      <div className="stat-title">Services</div>
      <div className="stat-value text-secondary">{stats.services}</div>
      <div className="stat-desc">We have 8 categories now</div>
    </div>

    <div className="stat">
      <div className="stat-figure text-accent">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block h-8 w-8 stroke-current">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h18v18H3z"></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12h6"></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v6"></path>
        </svg>
      </div>
      <div className="stat-title">Payments</div>
      <div className="stat-value text-accent">{stats.payments}</div>
      <div className="stat-desc">Click to see payments</div>
    </div>

    <div className="stat">
      <div className="stat-figure text-success">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block h-8 w-8 stroke-current">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <div className="stat-title">All Bookings</div>
      <div className="stat-value text-success">{stats.bookings}</div>
      <div className="stat-desc">Click to see Bookings</div>
    </div>

    <Link to="/allUsers" className="stat">
      <div className="stat-figure text-warning">
        <div className="avatar online">
          <div className="w-16 rounded-full">
            <img alt="" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
      </div>
      <div className="stat-title">Total Users</div>
      <div className="stat-value text-warning">{stats.users}</div>
      <div className="stat-desc text-warning">Click to see all users</div>
    </Link>
  </div>
</div>
  <PaymentChart></PaymentChart>

    {/* Notification Form */}
    <div>
                <h2>Send Notification</h2>
                <form onSubmit={sendNotification}>
                    <div>
                        <label>User ID:</label>
                        <input
                            type="text"
                            name="userId"
                            value={notification.userId}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Title:</label>
                        <input
                            type="text"
                            name="title"
                            value={notification.title}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Body:</label>
                        <input
                            type="text"
                            name="body"
                            value={notification.body}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit">Send Notification</button>
                </form>
            </div>
            
                  
        </div>
    );
};

export default AdminHome;