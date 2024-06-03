import  { useContext } from 'react';
import { useLoaderData,  } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';
const CheckOut = () => {
    const {_id,title,image}=useLoaderData();
    const {user}=useContext(AuthContext);
    const handlebookservice=event=>{

        event.preventDefault();
        const form=event.target;
        const name= form.name.value;
        const date=form.date.value;
        const email=user?.email;
        const mobile=form.mobile.value;

         const booking={
            customerName: name,
            email,
            date,
            service: title,
            service_id:_id,
            mobile,
            image

         }

         console.log(booking);

         Swal.fire({
            title: "Do You want to confirm your booking",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, I want"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings`,{
                    method :'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body: JSON.stringify(booking)
                 })
                 .then(res=>res.json())
                 .then(data=>{
                    console.log(data);
                 })
        
              Swal.fire({
                title: "Submitted!",
                text: `Congrats! You have Successfully booked our service ${title}`,
                icon: "success"
              });
            }
          });


    }

    return (
    <div className="min-h-screen bg-gray-100">
        <div className="hero md:h-96" style={{ backgroundImage: `url(${image})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content  text-neutral-content">
                    <div className="p-5 mt-10">
                        <h1 className="mb-5 text-5xl font-bold">Confirm Your Booking For <span>{title}</span></h1>
                        <p className="mb-5">Please fill up the form</p>
                   
                    </div>
                </div>
            </div>
        
        <div className='flex justify-center items-center mt-6'>
         <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Booking Form</h2>
        <form onSubmit={handlebookservice}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              defaultValue={user?.displayName}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="service">
              Service Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="service"
              type="text"
              name='service'
              value={title}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name='email'
              defaultValue={user?.email}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">
              Mobile No
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="mobile"
              type="tel"
              name='mobile'
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
              Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="date"
              type="date"
              name='date'
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reason">
              Reason for Booking
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
              id="reason"
              name='reason'
            ></input>
          </div>
          <div className="flex items-center justify-center">
            <input className="btn btn-primary w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type='submit' value='Confirm Order'></input>
          </div>
        </form>
      </div>
         </div>
    </div>
    );
};

export default CheckOut;