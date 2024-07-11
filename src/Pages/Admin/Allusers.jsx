
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { FaUserGear } from "react-icons/fa6";
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';

const Allusers = () => {
  const {user}=useContext(AuthContext);
  const { data: users = [], isLoading, refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/users');
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    }
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleMakeAdmin=user=>{
    fetch(`http://localhost:5000/users/admin/${user._id}`,{
        method:'PATCH'
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.modifiedCount){
            refetch()
            Swal.fire({
                title: `${user.name} Admin Make Successful`,
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });
        }
    })

  }

  const handleDelete=user=>{

  }



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
      {users.length}
      <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
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
      {users.map((user,index)=><tr key={user._id}>
        <th>{index+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{ user.role==='admin'?'admin':
          <button onClick={()=>handleMakeAdmin(user)} className="btn btn-warning btn-xs"><FaUserGear /></button>
          }</td>
        <td> <button onClick={()=>handleDelete(user)} className="btn btn-warning btn-xs">Delete</button></td>
      </tr>)}
      
    
    </tbody>
  </table>
</div>

    </div>
  );
};

export default Allusers;
