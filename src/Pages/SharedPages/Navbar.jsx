
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import useAdmin from '../Admin/useAdmin';
import { useContext } from 'react';
const Navbar = () => {

    const {user,logOut}=useContext(AuthContext);
    const handleLogout=()=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Log Out"
          }).then((result) => {
            if (result.isConfirmed) {
            logOut()
            .then(()=>{
               
            })
            .catch(error=>console.log(error));
              Swal.fire({
                title: "Log Out!",
                text: "Log Out Successfully",
                icon: "success"
              });
            }
          });

    }

    // const isAdmin=true;

    const [isAdmin]=useAdmin()



    const navitems = (
        <>
            <li><Link className='font-bold text-black md:text-white' to="/">Home</Link></li>
            <li><Link className='font-bold  text-black md:text-white' to="/about">About Us</Link></li>
            {/* <li><Link className='font-bold text-white' to="/member">Team Members</Link></li> */}
            <li><Link className='font-bold  text-black md:text-white' to="/services">Services</Link></li>
            <li><Link className='font-bold  text-black md:text-white' to="">Blogs</Link></li>
            <li><Link className='font-bold  text-black md:text-white' to="/contact">Contacts</Link></li>

            {/* {user?.email ?
                <li><Link className='font-bold text-white' to="/bookings">My Bookings</Link></li> : <> </>} */}
            {/* {isAdmin ?
                <li><Link className='font-bold text-white' to="/admin">Admin Dashboard</Link></li> : <> </>} */}
        </>
    );
    return (
        <div className="navbar bg-base-100 h-24 max-w-6xl mx-auto md:fixed md:bg-black md:z-10 md:bg-opacity-30 md:text-white" >
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content text-black mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                         {navitems}
                    </ul>
                </div>
                <Link to='/' className="w-10 rounded-full">
                    <img alt="pic" src="https://media.licdn.com/dms/image/D560BAQGR9QHncJ_Xxg/company-logo_200_200/0/1708973263709/the_attention_network_99_logo?e=2147483647&v=beta&t=yvNcEVSqARJUIeg9tJ9vfX0NE_vlMpmOM7rAykShDBM"/>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navitems}
                </ul>
            </div>


            
            <div className="navbar-end">
            {user ? (
  <div className="dropdown dropdown-bottom dropdown-end z-10 dropdown-hover">
    <div tabIndex={0} className="m-1 text-center">
    <div className="flex flex-col items-center justify-center">
    <img
      className="w-10 h-10 rounded-full" 
      alt="User profile"
      src={user.photoURL || "https://i0.wp.com/www.repol.copl.ulaval.ca/wp-content/uploads/2019/01/default-user-icon.jpg?ssl=1"}
    />
    <p className="mt-2 font-thin text-sm text-white">User Profile</p>
     </div>
    </div>
    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box text-black w-64 p-4 shadow-lg">
      <li className='mb-4 flex items-center gap-4'>
        <img 
          className='w-20 h-16  rounded-full' 
          alt="User profile"
          src={ "https://media.licdn.com/dms/image/D560BAQGR9QHncJ_Xxg/company-logo_200_200/0/1708973263709/the_attention_network_99_logo?e=2147483647&v=beta&t=yvNcEVSqARJUIeg9tJ9vfX0NE_vlMpmOM7rAykShDBM"} 
        />
        <div className='flex flex-col'>
          <p className='font-bold '>{user.displayName || "User Name"}</p> 
          <p className='text-bold text-gray-600'>{user.email || "user@example.com"}</p>
        </div>
      </li>
      <li className='mb-3'>
        <Link className='font-bold text-orange-500 hover:text-blue-700' to="/bookings">Your Profile</Link>
      </li>
      {isAdmin ?<li className='mb-3'><Link className='font-bold text-orange-500 hover:text-blue-700' to="/admin">Admin Dashboard</Link></li> : <> </>}
      <li>
        <Link onClick={handleLogout} className="btn btn-outline btn-warning w-full">Log Out</Link>
      </li>
    </ul>
  </div> ):<Link to="/login" className="btn btn-outline btn-warning">Login</Link>}
               
               {/* {
                 user? <><Link onClick={handleLogout} className="btn btn-outline btn-warning">Log Out</Link></>: <Link to="/login" className="btn btn-outline btn-warning">Login</Link>
               } */}
            </div>
        </div>
    );
};

export default Navbar;