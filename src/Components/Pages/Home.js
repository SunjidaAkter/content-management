import "../../App.css";
import Card from "../Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "@animxyz/core";
import getContentData from "../../redux/thunk/contents/getContents";

function Home() {
  const dispatch = useDispatch();
  const contents = useSelector((state) => state.content.contents);
  console.log(contents);
  useEffect(() => {
    dispatch(getContentData());
  }, [dispatch]);
  return (
    <div className="App px-12 pb-5">
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
