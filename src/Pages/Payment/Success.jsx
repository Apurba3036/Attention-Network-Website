import { useNavigate } from "react-router-dom";


const Success = () => {
    const navigate = useNavigate();

    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center animate__animated animate__fadeIn">
          {/* GIF Image */}
          <img
            src="https://cdn.dribbble.com/users/4358240/screenshots/14825308/media/84f51703b2bfc69f7e8bb066897e26e0.gif"
            alt="Payment Success"
            className="w-64 h-64 mx-auto mb-6"
          />
  
          {/* Success Text */}
          <h2 className="text-3xl font-bold text-green-600 mb-4">Payment Successful!</h2>
          <p className="text-gray-600 mb-6">
            Your payment was processed successfully.
          </p>
  
          {/* Back to Home Button */}
          <button
            onClick={() => navigate('/')}
            className="btn btn-primary bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  };

export default Success;