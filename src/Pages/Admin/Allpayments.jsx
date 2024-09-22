import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import PayemntTable from '../../Components/PayemntTable';

const Allpayments = () => {
    const [payments, setPayments] = useState([]);
    const { user } = useContext(AuthContext);

    const navigate = useNavigate();
    const urlpayment = `http://localhost:5000/payments`;

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
                alert('User token expired');
                navigate('/');
            }
        });
    }, [urlpayment, navigate]);

    return (
        <div className="mt-9 ">
            <div className="text-center text-2xl font-semibold mt-5 text-orange-400">
                <h1>Payments History</h1>
            </div>

            <div className="">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Transaction ID</th>
                            <th>Total Payment</th>
                            <th>Services</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Action</th> {/* Added for the details button */}
                        </tr>
                    </thead>
                    <tbody>
                        {payments.length > 0 ? (
                            payments.map(payment => (
                                <PayemntTable key={payment._id} payment={payment} />
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7">You have not booked yet.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allpayments;
