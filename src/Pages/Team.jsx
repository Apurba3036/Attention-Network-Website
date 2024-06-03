import React from 'react';
import Memberdetails from '../Components/Memberdetails';
import team from '../assets/team.jpg'

const Team = () => {
    const members = [
        {
          name: 'Tanveer Fahad Haq',
          thumbnail: 'https://scontent.fdac37-1.fna.fbcdn.net/v/t39.30808-6/441675294_7983540328337420_8356977473489485940_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeErcSmDB9YjyUF1ucNvU0hrCAEYw5pWAEwIARjDmlYATHfUIMaMGzJjVKCR4vbTP2F-0v6rIxkJLIxztj8h_wGA&_nc_ohc=W4C30rLUXMAQ7kNvgHZYIiR&_nc_ht=scontent.fdac37-1.fna&oh=00_AYDW4PTsSy41bh3kWof1qYHvO-5JjZCYcxBuMWIWtS09SA&oe=665F6D11',
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
            <div className="hero md:h-96" style={{ backgroundImage: `url(${team})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-justify text-neutral-content">
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