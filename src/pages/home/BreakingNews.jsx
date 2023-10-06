// import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex">
      <Link to="/">
        <button className="btn btn-secondary">Breking News</button>
      </Link>
      <Marquee
        className="border-y text-rose-300 rounded-r-lg"
        pauseOnHover={true}
        speed={100}
      >
        <Link className="mr-12" to="/">
          I can be a React component, multiple React components, or just some
          text.
        </Link>
        <Link className="mr-12" to="/">
          I can be a React component, multiple React components, or just some
          text.
        </Link>
        <Link className="mr-12" to="/">
          I can be a React component, multiple React components, or just some
          text.
        </Link>
        <Link className="mr-12" to="/">
          I can be a React component, multiple React components, or just some
          text.
        </Link>
        <Link className="mr-12" to="/">
          I can be a React component, multiple React components, or just some
          text.
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
