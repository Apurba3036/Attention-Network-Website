import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './../Providers/AuthProvider';
import Table from '../Components/Table';
import PayemntTable from './../Components/PayemntTable';
import { Link, useNavigate } from 'react-router-dom';

const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const [payments, setPayments] = useState([]);
    const [activeSection, setActiveSection] = useState('bookings');
    const navigate = useNavigate();

    const url = `http://localhost:5000/bookings?email=${user.email}`;
    
    useEffect(() => {
      fetch(url, {
        method: 'GET',
        headers: {
          authorization: `Bearer ${localStorage.getItem('Access_token')}`
        }
      })
      .then(res => res.json())
      .then(data => {
        if (!data.error) {
          setBookings(data);
        } else {
          alert('user token expired');
          navigate('/');
        }
      });
    }, [url, navigate]);

    const urlpayment = `http://localhost:5000/paymentdetails?email=${user.email}`;

    useEffect(() => {
      fetch(urlpayment, {
        method: 'GET',
        headers: {
          authorization: `Bearer ${localStorage.getItem('Access_token')}`
        }
      })
      .then(res => res.json())
      .then(data => {
        if (!data.error) {
          setPayments(data);
        } else {
          alert('user token expired');
          navigate('/');
        }
      });
    }, [urlpayment, navigate]);

    const handleDelete = id => {
      const proceed = confirm('Are you sure you want to delete this?');
      if (proceed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            const remaining = bookings.filter(booking => booking._id !== id);
            setBookings(remaining);
          }
        });
      }
    };

    const totalprice = bookings.reduce((total, booking) => total + booking.price, 0);
    const allAccepted = bookings.every(booking => booking.status === 'accepted');

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
           
            <div className="sidebar w-full md:w-1/4 lg:w-1/5 bg-gray-800 text-white p-6">
                <h3 className="text-3xl font-bold mb-6 text-center mt-2 md:mt-36">My Account</h3>
                <ul className="space-y-4">
                    <li>
                        <button
                            onClick={() => setActiveSection('bookings')}
                            className={`w-full text-left p-3 rounded-lg transition-colors duration-300 hover:bg-gray-600 ${
                                activeSection === 'bookings' ? 'bg-gray-600' : 'bg-gray-700'
                            }`}
                        >
                            Bookings
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setActiveSection('payments')}
                            className={`w-full text-left p-3 rounded-lg transition-colors duration-300 hover:bg-gray-600 ${
                                activeSection === 'payments' ? 'bg-gray-600' : 'bg-gray-700'
                            }`}
                        >
                            Payment History
                        </button>
                    </li>
                    
                </ul>
            </div>

          
            <div className="main-content w-full md:w-3/4 lg:w-4/5 p-6 bg-gray-100">
            
                <div className="hero h-30 rounded-lg overflow-hidden relative" style={{ backgroundImage: `url("https://burst.shopifycdn.com/photos/photography-product-download.jpg?width=1000&format=pjpg&exif=0&iptc=0")` }}>
                    <div className="hero-overlay bg-opacity-70 absolute inset-0 bg-black"></div>
                    <div className="hero-content relative z-5 text-center text-white">
                        <div className="p-5 mt-10">
                            <h1 className="text-4xl md:text-2xl font-bold">Welcome {user.displayName}</h1>
                            <p className="mt-2 text-lg">Check Your Bookings and Payments</p>
                        </div>
                    </div>
                </div>

               
                <div className="content mt-10 overflow-x-auto">
                    {activeSection === 'bookings' && (
                        <>
                            <div className='mt-5'>
                                <h2 className='font-bold text-2xl'>Total Price: {totalprice}</h2>
                            </div>
                            <div className="overflow-x-auto mt-3">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th><input type="checkbox" className="checkbox" /></th>
                                            <th>User</th>
                                            <th>Service</th>
                                            <th>Contact Information</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {bookings.length > 0 ? (
                                            bookings.map(booking => (
                                                <Table key={booking._id} handleDelete={handleDelete} booking={booking} />
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="6">You have not booked yet.</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>

                                {(bookings.length > 0 && allAccepted) && (
                                    <Link
                                        to="/payment"
                                        state={{ totalprice, bookings }}
                                        className="btn btn-warning mt-5 mb-3"
                                    >
                                        Proceed to Payment
                                    </Link>
                                )}
                            </div>
                        </>
                    )}
                    {activeSection === 'payments' && (
                        <>
                            <div className='text-center font-semibold mt-5 text-orange-400'>
                                <h1>Payment History</h1>
                            </div>
                            <table className="table mt-5">
                                <thead>
                                    <tr>
                                        <th>Transaction ID</th>
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
                                            <PayemntTable key={payment._id} payment={payment} />
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="6">You have not made any payments yet.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyBookings;
