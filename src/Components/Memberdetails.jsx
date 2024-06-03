import React from 'react';

const Memberdetails = ({ member }) => {
    const { name, thumbnail, post } = member;
    return (
        <div>
            <div className="card p-4 mt-4 lg:card-side bg-base-100 shadow-xl">
                <figure><img className="w-48 h-48 rounded-full object-cover"src={thumbnail} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='font-semibold'>{post}</p>
                   
                </div>
            </div>

        </div>
    );
};

export default Memberdetails;