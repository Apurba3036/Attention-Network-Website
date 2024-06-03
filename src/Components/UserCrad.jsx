

const UserCard = ({ user }) => {
    const { name, thumbnail, comment, rating } = user;
    
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-5 bg-white">
        <img className="w-24 h-24 rounded-full mx-auto" src={thumbnail} alt={name} />
        <div className="text-center mt-3">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="mt-2 text-gray-600">{comment}</p>
          <div className="flex justify-center mt-4">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-5 h-5 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927C9.233 2.588 9.639 2.588 9.823 2.927l1.9 3.853a1 1 0 00.753.546l4.257.618c.415.06.58.568.28.863l-3.077 3.002a1 1 0 00-.287.884l.726 4.23c.07.407-.36.714-.733.52L10 15.347l-3.8 2.002c-.372.194-.803-.113-.733-.52l.726-4.23a1 1 0 00-.287-.884l-3.077-3.002c-.3-.295-.135-.803.28-.863l4.257-.618a1 1 0 00.753-.546l1.9-3.853z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default UserCard;
  
  