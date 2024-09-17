import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const Overview = () => {
  const { user } = useContext(AuthContext);
 console.log(user);

  const { data: stats = {} } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/admin-stats');
      return res.json();
    },
  });

 

  return (
    <div>
 
      

      {/* Stats Section */}
      <div className="flex align-middle justify-center mt-5 mb-5">
        <div className="stats shadow text-center">
          {/* Revenue */}
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Revenue</div>
            <div className="stat-value text-primary">{stats?.revenue || 0} ৳</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          {/* Services */}
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Services</div>
            <div className="stat-value text-secondary">{stats?.services || 0}</div>
            <div className="stat-desc">We have 8 categories now</div>
          </div>

          {/* Payments */}
          <div className="stat">
            <div className="stat-figure text-accent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18v18H3z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v6"></path>
              </svg>
            </div>
            <div className="stat-title">Payments</div>
            <div className="stat-value text-accent">{stats?.payments || 0}</div>
            <div className="stat-desc">Click to see payments</div>
          </div>

          {/* Bookings */}
          <div className="stat">
            <div className="stat-figure text-success">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div className="stat-title">All Bookings</div>
            <div className="stat-value text-success">{stats?.bookings || 0}</div>
            <div className="stat-desc">Click to see Bookings</div>
          </div>

          {/* Total Users */}
          <Link to="/allUsers" className="stat">
            <div className="stat-figure text-warning">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img
                    alt=""
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  />
                </div>
              </div>
            </div>
            <div className="stat-title">Total Users</div>
            <div className="stat-value text-warning">{stats?.users || 0}</div>
            <div className="stat-desc text-warning">Click to see all users</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Overview;
