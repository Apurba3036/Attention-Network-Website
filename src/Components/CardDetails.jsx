import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaUtensils, FaDollarSign, FaCogs } from 'react-icons/fa'; // Importing React icons

const CardDetails = () => {
    const [service, setService] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
            .catch(error => console.error('Error fetching JSON:', error));
    }, [id]);
    console.log(service);
    return (
        <div className="container mx-auto p-5">
            {/* Hero section with background image */}
            <div className="hero h-96 md:h-[30rem]" style={{ backgroundImage: `url(${service.image})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content">
                    <div className="p-5 mt-10 text-center">
                        <h1 className="mb-5 text-5xl font-bold">{service.title}</h1>
                        <p className="mb-5">Explore the details of our service</p>
                    </div>
                </div>
            </div>

            {/* Content section */}
            <div className="md:flex mt-10 gap-10">
                {/* Left side: Image */}
                <div className="md:w-1/2 mb-5 md:mb-0">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover rounded-lg shadow-lg" />
                </div>

              
                <div className="md:w-1/2 bg-white p-5 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="mb-4 text-gray-700 text-justify">{service.description}</p>

                  
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold flex items-center gap-2">
                            <FaCogs className="text-blue-500" /> Facilities
                        </h3>
                        <p className="text-gray-700">{service.facilities}</p>
                    </div>

                 
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold flex items-center gap-2">
                            <FaUtensils className="text-green-500" /> Food Items
                        </h3>
                        <p className="text-gray-700">{service.foodItems}</p>
                    </div>

                  
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold flex items-center gap-2">
                            <FaDollarSign className="text-yellow-500" /> Price
                        </h3>
                        <p className="text-gray-700">${service.price}</p>
                    </div>

                    
                    <Link to={`/checkout/${id}`}>
                        <button className="btn btn-primary w-full mt-5">Checkout</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;
