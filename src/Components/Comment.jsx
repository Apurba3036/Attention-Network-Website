import React from 'react';
import UserCard from './UserCrad';

const Comment = () => {
   const users = [
    {
      name: 'Alice',
      thumbnail: 'https://randomuser.me/api/portraits/women/1.jpg',
      comment: 'Alice is a great team player!',
      rating: 3,
    },
    {
      name: 'Bob',
      thumbnail: 'https://randomuser.me/api/portraits/men/2.jpg',
      comment: 'Bob always brings a positive attitude.',
      rating: 5,
    },
    {
      name: 'Charlie',
      thumbnail: 'https://randomuser.me/api/portraits/men/3.jpg',
      comment: 'Charlie is very detail-oriented.',
      rating: 3,
    },
  ];

  return (
      <div className='mb-5 mt-5'>
        <div className='text-center space-y-5 p-3 md:mb-5'>
           <h3 className='text-1xl  text-orange-600'>Comments</h3>
            <h2 className='text-bold font-bold text-3xl'>What Customer Says</h2>
            <p className='text-pretty'>A community studio is a versatile and inclusive space designed to serve and support the needs of a local community. It is a hub where individuals and businesses can come together to collaborate</p>
            
           </div>

        <div className="flex flex-wrap justify-center gap-6 mt-10">
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
    </div>
    );
};

export default Comment;