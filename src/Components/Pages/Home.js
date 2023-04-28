import "../../App.css";
import Card from "../Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { XyzTransition } from "@animxyz/react";
import "@animxyz/core";
import getContentData from "../../redux/thunk/Contents/getContents";

function Home() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const contents = useSelector((state) => state.content.contents);
  useEffect(() => {
    dispatch(getContentData());
  }, [dispatch]);
  console.log(state);
  return (
    <div className="App px-12 pb-5">
      <div className="flex justify-end">
        <button className="bg-slate-600 text-white rounded-md px-3 py-1 mt-3 ml-5">
          hello
        </button>
        <button className="bg-slate-600 text-white rounded-md px-3 py-1 mt-3 ml-5">
          hello
        </button>
        <button className="bg-slate-600 text-white rounded-md px-3 py-1 mt-3 ml-5">
          hello
        </button>
      </div>
      <p className="text-4xl p-10">HELLO</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        {contents.map((content) => (
          <Card key={content.id} content={content}></Card>
        ))}
      </div>
    </div>
  );
}

export default Home;
