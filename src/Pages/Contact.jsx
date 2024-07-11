import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
    <div className="hero md:h-96" style={{ backgroundImage: `url("https://t3.ftcdn.net/jpg/06/08/82/50/360_F_608825085_MuQopoWCJQJ8BUa4u2z1DECXtkuoVLmj.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="p-5 mt-10">
                        <h1 className="mb-5 text-5xl font-bold">Contact Us</h1>
                        <p className="mb-5">We are here for you</p>
                   
                    </div>
                </div>
            </div>
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex flex-col-reverse lg:flex-row-reverse items-center justify-center w-full">
      <div className="hidden md:block md:w-full lg:w-1/2 md:flex md:justify-center lg:justify-start">
        <img 
          src="https://img.freepik.com/free-photo/top-view-chat-bubbles-with-telephone-receiver-copy-space_23-2148796078.jpg" 
          className="w-full lg:w-96 h-96 object-cover rounded-lg shadow-2xl" 
          alt="Contact" 
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start p-8">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faMobileAlt} className="text-2xl mr-4" />
            <p className="text-lg">+1 234 567 890</p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-2xl mr-4" />
            <Link to="" onClick={() => window.location = 'mailto:yourmail@domain.com'} className="text-lg">email@example.com</Link>

          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faFacebook} className="text-2xl mr-4" />
            <p className="text-lg">facebook.com/yourpage</p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faInstagram} className="text-2xl mr-4" />
            <p className="text-lg">@yourinstagram</p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faWhatsapp} className="text-2xl mr-4" />
            <p className="text-lg">+1 234 567 890</p>
          </div>
        </div>
        <div className="mt-8 w-full">
          <textarea
            className="textarea textarea-bordered w-full h-32"
            placeholder="Write your message here"
          ></textarea>
          <button className="btn btn-primary mt-4">Send Message</button>
        </div>
      </div>
    </div>
  </div>
  </>
  );
};

export default Contact;
