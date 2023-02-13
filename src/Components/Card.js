import React, { useEffect, useState } from "react";
import { XyzTransition } from "@animxyz/react";
import useAnime from "./useAnime";

const Card = ({ content }) => {
  const [scrolled] = useAnime(50, 50, 50, 50);
  return (
    <XyzTransition
      duration={1000}
      className="item-group"
      xyz="fade flip-up flip-left delay-3"
    >
      {
        <div className="border border-2 border-gray-600 shadow-lg relative rounded-3xl p-3 flex flex-col ">
          <div className="h-52 w-full mx-auto">
            <img src={content.img} alt="girl" />
          </div>
          <h1 className="font-bold text-4xl text-center">{content.title}</h1>
          <p className="text-center font-semibold mb-3">{content.desc}</p>
          <button className="my-3 p-4 bg-zinc-500 w-1/2 ">update</button>
        </div>
      }
    </XyzTransition>
  );
};

export default Card;
