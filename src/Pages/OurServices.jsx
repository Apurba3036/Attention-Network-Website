import React, { useEffect, useState } from 'react';
import Cardbody from '../Components/Cardbody';


const OurServices = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    return (
        <div className='md:mt-8 mb-5 p-10'>
           <div className='text-center space-y-5 p-3 md:mb-5'>
           <h3  className='text-1xl  text-orange-600'>Service</h3>
            <h2 className='text-bold font-bold text-3xl'>Our Service Areas</h2>
            <p className='text-pretty'>A community studio is a versatile and inclusive space designed to serve and support the needs of a local community. It is a hub where individuals and businesses can come together to collaborate</p>
            
           </div>
           <div className='sm:flex sm:flex-col sm:justify-center sm:align-middle md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-5'>
                {/* <p>{services.length}</p> */}

                {
                    services.map(service=><Cardbody key={service._id} service={service}></Cardbody>)
                }
            </div>
        </div>
        
    );
};

export default OurServices;