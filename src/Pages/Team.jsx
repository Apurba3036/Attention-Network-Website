import React from 'react';
import Memberdetails from '../Components/Memberdetails';


const Team = () => {
    const members = [
        {
          name: 'Mr. Dog',
          thumbnail: 'https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg',
          post: 'Co-founder and CEO',
          rating: 3,
        },
        {
          name: 'Bob',
          thumbnail: 'https://randomuser.me/api/portraits/men/2.jpg',
          post: 'Co-founder and Managing Director',
          rating: 5,
        },
        {
          name: 'Charlie',
          thumbnail: 'https://randomuser.me/api/portraits/men/3.jpg',
          post: 'Executive Member',
          rating: 3,
        },
      ];
    return (
        <div>
            <div className="hero md:h-96" style={{ backgroundImage: `url("https://c1.wallpaperflare.com/preview/588/623/690/interior-white-office-workspace.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="p-5 mt-10">
                        <h1 className="mb-5 text-5xl font-bold">Meet Our Team</h1>
                        <p className="mb-5">We have some exciting members in our team</p>
                   
                    </div>
                </div>
            </div>
         <div className="grid-cols-1 p-10 mt-5">
      {members.map((member, index) => (
        <Memberdetails key={index} member={member} />
      ))}
    </div>
            
        </div>
    );
};

export default Team;