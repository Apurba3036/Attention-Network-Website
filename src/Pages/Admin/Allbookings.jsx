import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import BookingTable from './BookingTable';
import { AuthContext } from '../../Providers/AuthProvider';

const Allbookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate(); 

    const url = `http://localhost:5000/allBookings`;

    // Function to refetch the bookings
    const fetchBookings = () => {
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
                alert('User token expired');
                navigate('/'); // Navigate to home on token expiration
            }
        });
    };

    // Initial data fetch
    useEffect(() => {
        fetchBookings();
    }, [url, navigate]);

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

    return (
        <div>
            <div className='mt-5'>
                <h2 className='font-bold text-2xl'>Total Price: {totalprice} ৳</h2>
            </div>

            <div className="overflow-x-auto mt-3">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>User</th>
                            <th>Service</th>
                            <th>Contact Information</th>
                            <th>Date</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.length > 0 ? (
                            bookings.map(booking => (
                                <BookingTable
                                    key={booking._id}
                                    booking={booking}
                                    handleDelete={handleDelete}
                                    refetch={fetchBookings}  // Passing refetch function
                                />
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">not booked yet.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allbookings;
