import React from 'react';
import { FaCheck } from "react-icons/fa6";
import Swal from 'sweetalert2';

const BookingTable = ({ booking, handleDelete, refetch }) => {  // Added refetch prop
    const { _id, customerName, email, service, service_id, image, mobile, date, price, status } = booking;

    const handleStatus = id => {
        console.log(id);
        fetch(`http://localhost:5000/bookings/admin/${id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                refetch();  // Call refetch to reload data after status change
                Swal.fire({
                    title: `Accepted Successfully`,
                    showClass: {
                        popup: `animate__animated animate__fadeInUp animate__faster`
                    },
                    hideClass: {
                        popup: `animate__animated animate__fadeOutDown animate__faster`
                    }
                });
            }
        });
    };

    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} alt="Avatar" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customerName}</div>
                        <div className="text-sm opacity-50">Bangladesh</div>
                    </div>
                </div>
            </td>
            <td>
                {service}
                <br />
                <span className="badge badge-ghost badge-sm">Service id: {service_id}</span>
            </td>
            <td>{mobile} <br /> {email}</td>
            <td>{date}</td>
            <td>{price}</td>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-warning btn-xs">Delete</button>
            </th>
            <th>
                {status === 'accepted' ? <FaCheck /> : (
                    <button 
                        onClick={() => handleStatus(_id)} 
                        className="btn btn-warning btn-xs">
                        Accept
                    </button>
                )}
            </th>
            <th>
                <p>Payment not done yet</p>
            </th>
        </tr>
    );
};

export default BookingTable;
