


const Cardbody = ({service}) => {
    const {_id,title,image,description}= service;
    // console.log(description);
    return (
        <div className="card  mx-auto w-80 bg-base-100 shadow-xl mt-5">
        <figure><img className='h-48 w-full' src={image} alt="Shoes" /></figure>
        <div className="card-body text-center">
          <h2 className=" font-bold text-1xl">{title}</h2>
      
          <div className="card-actions justify-center bottom-0">
          {/* <Link to={`/details/${_id}`} className="btn btn-primary mt-3">Details</Link> */}
          </div>
        </div>
      </div>
    );
};

export default Cardbody;