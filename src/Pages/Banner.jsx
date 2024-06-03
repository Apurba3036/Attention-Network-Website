import React from 'react';

import image2 from '../../public/image2.jfif';
import image1 from '../../public/image1.jfif';
import image3 from '../../public/image3.jfif';
import image4 from '../../public/image4.jfif';
import Image5 from '../../public/Image5.jfif';

const Banner = () => {
    return (
        <div className="carousel w-full h-dvh ">
        <div id="slide1" className="carousel-item relative w-full h-full" >
            <img src={image1} className="w-full h-full object-cover rounded-lg"  />
            <div className="absolute sm:mt-20 md: transform md:-translate-y-1/2 left-5 right-5 md:bottom-0" >
                <div className='text-white space-y-7 md:w-1/2' >
                <h1 className='font-bold text-4xl md:text-6xl'>The Attention Network</h1>
                <p>Community studio to host and promote individuals and businesses.</p>
                <div>
                <button className="btn btn-warning mr-5 mb-3">Get Started</button>
                
                </div>
                </div>
               

            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-full">
            <img src={image2} className="w-full h-full object-cover" />
            <div className="absolute sm:mt-20 md: transform md:-translate-y-1/2 left-5 right-5 md:bottom-0" >
                <div className='text-white space-y-7 md:w-1/2' >
                <h1 className='font-bold text-4xl md:text-6xl'>The Attention Network</h1>
                <p>Community studio to host and promote individuals and businesses.</p>
                <div>
                <button className="btn btn-warning mr-5 mb-3">Get Started</button>
                
                </div>
                </div>
               

            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-full">
            <img src={image3} className="w-full h-full object-cover" />
            <div className="absolute sm:mt-20 md: transform md:-translate-y-1/2 left-5 right-5 md:bottom-0" >
                <div className='text-white space-y-7 md:w-1/2' >
                <h1 className='font-bold text-4xl md:text-6xl'>The Attention Network</h1>
                <p>Community studio to host and promote individuals and businesses.</p>
                <div>
                <button className="btn btn-warning mr-5 mb-3">Get Started</button>
                
                </div>
                </div>
               

            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full h-full">
            <img src={image4} className="w-full h-full object-cover" />
            <div className="absolute sm:mt-20 md: transform md:-translate-y-1/2 left-5 right-5 md:bottom-0" >
                <div className='text-white space-y-7 md:w-1/2' >
                <h1 className='font-bold text-4xl md:text-6xl'>The Attention Network</h1>
                <p>Community studio to host and promote individuals and businesses.</p>
                <div>
                <button className="btn btn-warning mr-5 mb-3">Get Started</button>
                
                </div>
                </div>
               

            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div>
    </div>
    
    
    );
};

export default Banner;