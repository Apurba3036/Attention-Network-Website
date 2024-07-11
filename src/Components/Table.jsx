import React from 'react';

const Table = ({booking, handleDelete}) => {
    const {_id,customerName,email,service,service_id,image,mobile,date}=booking;
    
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
                <img src={image} alt="Avatar Tailwind CSS Component" />
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
          <br/>
          <span className="badge badge-ghost badge-sm">Service id: {service_id}</span>
        </td>
        <td>{mobile} <br /> {email}</td>
        <td>{date}</td>
        <th>
          <button onClick={()=>handleDelete(_id)} className="btn btn-warning btn-xs">Delete</button>
        </th>
      </tr>
      
   
    
    
    
    );
};

export default Table;