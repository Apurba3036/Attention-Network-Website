import React from 'react';
import { Link } from 'react-router-dom';

const PayemntTable = ({ payment }) => {
    const { _id, transactionid, email, totalprice, itemsNames, date, order_status } = payment;

   
    const formattedDate = date ? new Date(date).toLocaleDateString() : 'N/A';

    return (
        <tr className="">
            <td>
                <div className="flex flex-col">
                    <div className="font-bold">{transactionid}</div>
                    <div className="text-sm opacity-50">Bangladesh</div>
                </div>
            </td>
            <td>{totalprice}</td>

            <td>
                {itemsNames.map((itemname, index) => (
                    <div key={index}>{itemname}</div>
                ))}
            </td>

            <td>{email}</td>
            <td>{formattedDate}</td>
            <td>{order_status}</td>
            <th>
                <Link to={`/Paymentdetails/${_id}`} className="btn btn-primary btn-sm">
                    Details
                </Link>
            </th>
        </tr>
    );
};

export default PayemntTable;
