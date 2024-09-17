import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import  { useContext, useEffect, useState } from 'react';
import { FaUserGear } from "react-icons/fa6";
import Swal from 'sweetalert2';


const Allusers = () => {
  
  const [localUsers, setLocalUsers] = useState([]);  // Add state for managing users locally
  
  const { data: users = [], isLoading, refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/users');
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      setLocalUsers(data);  // Store fetched users locally
      return data;
    }
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleMakeAdmin = user => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
      if (data.modifiedCount) {
        refetch(); 
        Swal.fire({
          title: `${user.name} Admin Make Successful`,
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


  const handleDelete=id=>{
    console.log(id);
    const procced=confirm('Are u sure want to delete this?');
    if (procced){
      const url=`http://localhost:5000/allusers/${id}`;

     
        fetch(url,{
          method:'DELETE',
          headers:{
            authorization:`Bearer ${localStorage.getItem('Access_token')}`
          }
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
        if(data.deletedCount>0){
             const remaining=localUsers.filter(newuser=>newuser._id!== id);
             setLocalUsers(remaining);
        }
        });
     
    }
  }

//   const handleDelete = (user) => {
//     console.log(user);
//     const proceed = confirm('Are you sure you want to delete this?');
    
//     if (proceed) {
//         axios
//           .delete(`http://localhost:5000/user/${user._id}`) 
//           .then((response) => {
//               console.log(response.data);
//               if (response.data.deletedCount > 0) {
//                   const remaining = localUsers.filter(newuser => newuser._id !== user._id);
//                   setLocalUsers(remaining); 
//               }
//           })
//           .catch((error) => {
//               console.error('Error deleting user:', error.message); // Handle any errors
//           });
//     }
// };

  return (
    <div className='mt-9'>
      <div className='text-center text-2xl font-semibold mt-5 text-orange-400'> 
        <h1>All Users</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {localUsers.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === 'admin' ? 'admin' : (
                    <button 
                      onClick={() => handleMakeAdmin(user)} 
                      className="btn btn-warning btn-xs">
                      <FaUserGear />
                    </button>
                  )}
                </td>
                <td>
                  <button 
                    onClick={() => handleDelete(user._id)} 
                    className="btn btn-warning btn-xs">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allusers;
