import { Link } from "react-router-dom";


const Mail = () => {
    return (
      <div className="relative rounded-lg md:h-56 lg:min-h-96 mt-5 mb-5">
      <img 
        src="https://i.pinimg.com/736x/8a/87/b9/8a87b9e2c4b9e623d664e967b586324b.jpg" 
        alt="Hero Background" 
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-60 bg-black rounded-lg">
        <div className="text-center">
          <h1 className="mb-5 text-white md:text-5xl font-bold">
            The first community studio in Bangladesh
          </h1>
          <Link to='/contact' className="btn btn-warning">Contacts</Link>
        </div>
      </div>
    </div>
    );
};

export default Mail;