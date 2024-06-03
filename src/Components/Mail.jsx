import React from 'react';

const Mail = () => {
    return (
        <div className="hero rounded-lg md:min-h-80 lg:min-h-96 bg-base-300 mt-5 mb-5" style={{backgroundImage: 'url(https://i.pinimg.com/736x/8a/87/b9/8a87b9e2c4b9e623d664e967b586324b.jpg)'}}>
        <div className="hero-overlay rounded-lg bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="text-center">
            <h1 className="mb-5 text-white md:text-5xl font-bold">The first community studio in Bangladesh</h1>
            
            <button className="btn btn-warning">Contacts</button>
          </div>
        </div>
      </div>
    );
};

export default Mail;