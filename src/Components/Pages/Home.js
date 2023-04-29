import "../../App.css";
import Card from "../Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { XyzTransition } from "@animxyz/react";
import "@animxyz/core";
import getContentData from "../../redux/thunk/Contents/getContents";
import { toggleBrand, toggleStock } from "../../redux/actions/filterActions";

function Home() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const contents = useSelector((state) => state.content.contents);
  const filters = useSelector((state) => state.filter.filters);
  useEffect(() => {
    dispatch(getContentData());
  }, [dispatch]);
  let content;

  if (contents.length) {
    content = contents.map((content) => (
      <Card key={content.id} content={content}></Card>
    ));
  }
  if (contents.length && (filters.stock || filters.brands.length)) {
    content = contents
      .filter((content) => {
        if (filters.stock) {
          return content.status === true;
        }
        return content;
      })
      .filter((content) => {
        if (filters.brands.length) {
          return filters.brands.includes(content.brand);
        }
        return content;
      })
      .map((content) => <Card key={content.id} content={content}></Card>);
  }
  console.log(filters);
  return (
    <div className="App px-12 pb-5">
      <div className="flex justify-end">
        <button
          onClick={() => dispatch(toggleStock())}
          className={`${
            filters.stock ? "bg-slate-600" : "bg-red-600"
          } text-white rounded-md px-3 py-1 mt-3 ml-5`}
        >
          stock
        </button>
        <button
          onClick={() => dispatch(toggleBrand("trendy"))}
          className={`${
            filters.brands.includes("trendy") ? "bg-slate-600" : "bg-red-600"
          } text-white rounded-md px-3 py-1 mt-3 ml-5`}
        >
          trendy
        </button>
        <button
          onClick={() => dispatch(toggleBrand("popular"))}
          className={`${
            filters.brands.includes("popular") ? "bg-slate-600" : "bg-red-600"
          } text-white rounded-md px-3 py-1 mt-3 ml-5`}
        >
          popular
        </button>
      </div>
      <p className="text-4xl p-10">HELLO</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        {content}
      </div>
    </div>
  );
}

export default Home;
