import React, { useEffect, useState } from 'react';
import { Link,  useParams } from 'react-router-dom';

const CardDetails = () => {
        const [services,setServices]=useState([]);
        const { id } = useParams();
       useEffect(()=>{
        fetch(`http://localhost:5000/services/${id}`)
        .then(res=>res.json())
        .then(data=>setServices(data))
        .catch(error => console.error('Error fetching JSON:', error));;
       },[])


    //   console.log(services);
 
    return (
        <div>
            <div className="hero md:h-96" style={{ backgroundImage: `url(${services.image})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-justify text-neutral-content">
                    <div className="p-5 mt-10 text-center">
                        <h1 className="mb-5 text-5xl font-bold">{services.title}</h1>
                        <p className="mb-5">Here is our service detalis</p>

                    </div>
                </div>
            </div>
            <div className='mb-5 md:mt-20'>
                
                <div className='w-full h-72 p-5 shadow-slate-200 bg-slate-400 rounded-lg'>
                <p className='text-black font-bold'>{services.description}</p>
                </div>
                <Link to={`/checkout/${id}`}>
                    <button className='btn btn-primary mt-3'>CheckOut</button>
                </Link>
            </div>
            {/* Fetch details or perform actions based on the id */}
        </div>
    );
};

export default CardDetails;