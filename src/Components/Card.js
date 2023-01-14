import React from 'react';

const Card = ({content}) => {
    return (
        <div className='border border-2 border-gray-600 shadow-lg relative rounded-3xl p-3 flex flex-col '>
            <div className='h-52 w-52 mx-auto'>
                <img src={content.image} alt='girl'/>
            </div>
            <h1 className='font-bold text-4xl text-center'>{content.model}</h1>
            <p className='text-center font-semibold mb-3'>Rating: {content.status}</p>
            <button className='my-3 p-4 bg-zinc-500 w-1/2 '></button>
        </div>
    );
};

export default Card;