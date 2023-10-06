// import React from 'react';

import { useParams } from "react-router-dom";
import Header from "../shared/header/Header";
import RightSideNav from "../shared/rightSidenav/RightSideNav";
import Navbar from "../shared/navbar/Navbar";

const News = () => {
  const { id } = useParams;
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4">
        <div className=" border col-span-3">
          <h2>news details</h2>
          <p>{id}</p>
        </div>

        <div className="border">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default News;
