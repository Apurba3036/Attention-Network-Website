import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import { useLocation } from 'react-router-dom';

const stripePromise=loadStripe('pk_test_51PY5nKRrK5w1Alg4D2P5K2KfuGdpncjYILBh9zlnJl5OJnICPS2o5mxnqPdVn2LBaGj5GEJm6tTT7A9mvd0EjOjR006wn6Bwsu')
const Payment = () => {
    const location=useLocation();
    const {totalprice,bookings}=location.state || {totalprice:0};
    return (
        <div>
          <div className="hero md:h-96" style={{ backgroundImage: `url("https://burst.shopifycdn.com/photos/photography-product-download.jpg?width=1000&format=pjpg&exif=0&iptc=0")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="p-5 mt-10">
                        <h1 className="mb-5 text-5xl font-bold">Payment</h1>
                        <p className="mb-5">Please Follow The Pyament Procedure</p>
                   
                    </div>
                </div>
            </div>
         <div className='mt-5 mb-5'>
            <h2>Total Price:{totalprice} {bookings.length}</h2>
         <Elements stripe={stripePromise}>
                <CheckoutForm bookings={bookings} totalprice={totalprice}></CheckoutForm>
            </Elements>
         </div>
            
        </div>
    );
};

export default Payment;