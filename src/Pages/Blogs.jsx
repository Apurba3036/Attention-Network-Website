import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className="hero md:h-96" style={{ backgroundImage: `url("https://burst.shopifycdn.com/photos/photography-product-download.jpg?width=1000&format=pjpg&exif=0&iptc=0")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="p-5 mt-10">
                        <h1 className="mb-5 text-5xl font-bold">Our Blogs</h1>
                        <p className="mb-5">Read the Blogs</p>
                   
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Blogs;