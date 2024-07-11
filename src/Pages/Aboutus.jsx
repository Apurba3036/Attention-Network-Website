import React from 'react';

import { Link } from 'react-router-dom';
const Aboutus = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/026/797/560/large_2x/solidarity-unite-people-hands-together-community-teamwork-realistic-image-ultra-hd-free-photo.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-justify text-neutral-content">
                    <div className="p-5 mt-10">
                        <h1 className="mb-5 text-5xl font-bold">About Us</h1>
                        <p className="mb-5">Welcome to Attention Network, a vibrant and inclusive space where creativity and community come together. We believe in the power of artistic expression and collaboration to inspire, empower, and connect people from all walks of life. Our studio offers a diverse range of programs and workshops designed to nurture talent, foster learning, and encourage personal growth. Whether you're an aspiring artist, a seasoned professional, or simply someone looking to explore your creative side, you'll find a welcoming environment here at [Community Studio Name]. Together, we create, learn, and grow, building a stronger and more connected community through the arts. Join us and be a part of something beautiful!</p>
                        <Link to="/" className="btn btn-primary">Get Started</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;