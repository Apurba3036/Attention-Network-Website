import React, { useState, useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import PaymentChart from './PaymentChart';
import Allusers from './Allusers';
import Allpayments from './Allpayments';
import Overview from './Overview';
import Allbookings from './Allbookings';

const AdminHome = () => {
  const { user } = useContext(AuthContext);
  const [activeSection, setActiveSection] = useState('dashboard');

  // Sidebar menu options
  const sections = [
    { name: 'Dashboard', value: 'dashboard' },
    { name: 'All Users', value: 'allUsers' },
    { name: 'Payment History', value: 'payments' },
    { name: 'Payment Chart', value: 'chart' },
    { name: 'All bookings', value: 'allbookings' }
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      
      <div className="sidebar w-full md:w-1/4 lg:w-1/5 bg-gray-800 text-white p-6">
      
        <h3 className="text-3xl font-bold mb-6 text-center mt-2 md:mt-36">Admin Panel</h3>
        <ul className="space-y-4">
          {sections.map(section => (
            <li key={section.value}>
              <button
                onClick={() => setActiveSection(section.value)}
                className={`w-full text-left p-3 rounded-lg transition-colors duration-300 hover:bg-gray-600 ${
                  activeSection === section.value ? 'bg-gray-600' : 'bg-gray-700'
                }`}
              >
                {section.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

     
      <div className="main-content w-full md:w-3/4 lg:w-4/5 p-6 bg-gray-100">
       
        <div className="hero  h-30 rounded-lg overflow-hidden relative" style={{ backgroundImage: `url("https://burst.shopifycdn.com/photos/photography-product-download.jpg?width=1000&format=pjpg&exif=0&iptc=0")` }}>
          <div className="hero-overlay bg-opacity-70 absolute inset-0 bg-black"></div>
          <div className="hero-content relative z-5 text-center text-white">
            <div className="p-5 mt-10">
              <h1 className="text-4xl md:text-2xl font-bold">Welcome {user.displayName}</h1>
              <p className="mt-2 text-lg">Check Admin Panel</p>
            </div>
          </div>
        </div>

       
        <div className="content mt-10 overflow-x-auto">
          {activeSection === 'dashboard' && <Overview></Overview>}
          {activeSection === 'allUsers' && <Allusers />}
          {activeSection === 'payments' && <Allpayments />}
          {activeSection === 'chart' && <PaymentChart />}
          {activeSection === 'allbookings' && <Allbookings></Allbookings>}
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
