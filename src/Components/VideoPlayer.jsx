

const VideoPlayer = () => {
  return (
    <div className="hero mt-5 mb-5 min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Some words from our <span className='text-orange-500'>CEO!</span></h1>
      
    </div>
    <div className="card md:w-1/2 md:mr-5 ">
    <iframe
      title="Youtube Video"
      src="https://www.youtube.com/embed/tMdFGrnp5XI?si=C2flZKh-Kzj27M1I"
     
        
      style={{ border: 'none', overflow: 'hidden' }}
      className='rounded-lg h-96 w-full '
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      allowFullScreen={true}
    ></iframe>
    </div>
  </div>
</div>

  );
};

export default VideoPlayer;
