import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const stripePromise = loadStripe('pk_test_51PY5nKRrK5w1Alg4D2P5K2KfuGdpncjYILBh9zlnJl5OJnICPS2o5mxnqPdVn2LBaGj5GEJm6tTT7A9mvd0EjOjR006wn6Bwsu');

const Payment = () => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    const { totalprice, bookings } = location.state || { totalprice: 0 };

    // Function to handle SSL payment
    const handlesslpayment = () => {
        if (totalprice > 0) {
            fetch("http://localhost:5000/create-payment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                    email: user?.email,
                    totalprice,
                    quantity: bookings.length,
                    bookingsitems: bookings.map(item => item._id),
                    serviceitems: bookings.map(item => item.service_id),
                    itemsNames: bookings.map(item => item.service),
                    date: new Date(),
                    service_date: bookings.map(item => item.date),
                    order_status: "Payment done"
                }),
            })
            .then((res) => res.json())
            .then((data) =>{
                const redirectURL=data.paymentUrl;
                if(redirectURL){
                    window.location.replace(redirectURL)
                }
                
            })
            .catch((error) => console.error("Error:", error));
        } else {
            console.log("Total price must be greater than 0");
        }
    
    };

    return (
        <div>
        {/* Hero Section */}
        <div
          className="hero md:h-96"
          style={{
            backgroundImage: `url("https://burst.shopifycdn.com/photos/photography-product-download.jpg?width=1000&format=pjpg&exif=0&iptc=0")`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="p-5 mt-10">
              <h1 className="mb-5 text-5xl font-bold">Payment</h1>
              <p className="mb-5">Please Follow The Payment Procedure</p>
            </div>
          </div>
        </div>
  
        {/* Payment Section */}
        <div className="container mx-auto mt-10 mb-10 p-5 bg-white shadow-lg rounded-lg">
          <h2 className="text-3xl font-semibold mb-5">
            Total Price: <span className="text-green-600">${totalprice}</span> ({bookings.length} item)
          </h2>
          <p className="mb-10 text-lg text-gray-600">
            Choose your preferred payment method below:
          </p>
  
          {/* Payment Options */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            {/* Stripe Payment */}
            <div className="flex flex-col items-center p-5 border border-blue-200 rounded-lg hover:shadow-lg">
              <img
                src="https://cdn.brandfetch.io/stripe.com/fallback/transparent/theme/dark/h/512/w/512/icon?t=1717858517316"
                alt="Stripe Logo"
                className="h-16 mb-4"
              />
              <Elements stripe={stripePromise}>
                <CheckoutForm bookings={bookings} totalprice={totalprice} />
              </Elements>
              <p className="mt-4 text-sm text-gray-500">
                Secure payment via Stripe
              </p>
            </div>
  
            {/* SSLCommerze Payment */}
            <div className="flex flex-col items-center p-5 border border-blue-200 rounded-lg hover:shadow-lg">
              <img
                src="https://sslcommerz.com/wp-content/uploads/2021/11/logo.png"
                alt="SSLCommerz Logo"
                className="h-16 mb-4"
              />
              <button
                className="btn btn-primary mt-5 w-full"
                onClick={handlesslpayment}
              >
                Pay with SSLCommerz
              </button>
              <p className="mt-4 text-sm text-gray-500">
                Powered by SSLCommerz
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Payment;
