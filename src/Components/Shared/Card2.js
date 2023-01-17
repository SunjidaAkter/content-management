import React, { useEffect, useState } from 'react';
import { XyzTransition } from '@animxyz/react';

const Card2 = ({content}) => {
    const [scrolled, setScrolled] = useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        if ((50+1024)<offset  ) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    })
    return (
        <XyzTransition
     className="item-group"
     xyz="fade flip-up flip-left"
     >
        {scrolled &&
        <div className='border border-2 border-gray-600 shadow-lg relative rounded-3xl p-3 flex flex-col '>
            <div className='h-52 w-52 mx-auto'>
                <img src={content.image} alt='girl'/>
            </div>
            <h1 className='font-bold text-4xl text-center'>{content.model}</h1>
            <p className='text-center font-semibold mb-3'>Rating: {content.status}</p>
            <button className='my-3 p-4 bg-zinc-500 w-1/2 '></button>
        </div>
        }
     </XyzTransition>
    );
};

export default Card2;