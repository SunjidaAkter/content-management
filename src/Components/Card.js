import React, { useEffect, useState } from 'react';
import { XyzTransition } from '@animxyz/react';
import useAnime from './useAnime';

const Card = ({content}) => {
    // const [scrolled, setScrolled] = useState(false);
    // const handleScroll = () => {
    //     const offset = window.scrollY;
    //     if (window.screen.width>=0 &&  window.screen.width<=640 ) {
    //        offset>50 ? setScrolled(true):setScrolled(false);
    //     }
    //     else if (window.screen.width>=641 &&  window.screen.width<=768 ) {
    //         offset>50 ? setScrolled(true):setScrolled(false);
    //     }
    //     else if (window.screen.width>=769 &&  window.screen.width<=1024 ) {
    //         offset>50 ? setScrolled(true):setScrolled(false);
    //     }
    //     else{
    //         offset>50 ? setScrolled(true):setScrolled(false);
    //     }

    // }
    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);
    // })
    return (
        <XyzTransition
        duration={1000}
     className="item-group"
     xyz="fade flip-up flip-left delay-3"
     >
        {useAnime(34,134,50,50) &&
        <div className='border border-2 border-gray-600 shadow-lg relative rounded-3xl p-3 flex flex-col '>
            <div className='h-52 w-full mx-auto'>
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

export default Card;