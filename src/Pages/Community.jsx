import React from 'react';
import community from '../../public/community.jfif'
import community2 from '../../public/community2.jfif'
import { Link } from 'react-router-dom';
const Community = () => {
    return (
        <div className="hero min-h-96 bg-base-300 mt-5 mb-5">
        <div className="hero-content flex-col lg:flex-row-reverse">
        <div className=' relative lg:w-full'>
        <img src={community} className="md:w-3/4 h-full rounded-lg shadow-2xl" />
          <img src={community2} className="hidden   md:block w-1/2  absolute right-5 top-1/2 rounded-lg  shadow-2xl" />
        </div>
          <div className='md:ml-5'>
          <h1 className="text-5xl font-bold">What is a community center?</h1>
          <p className="py-6">A lot of you might be wondering what we actually are. Community centres, community centers, or community halls are public locations where members of a community tend to gather for group activities...</p>
          </div>
        </div>
      </div>
    );
};

export default Community;