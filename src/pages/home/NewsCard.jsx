// import React from "react";

import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, image_url, details, _id } = news;
  return (
    <div>
      <div className="card border  bg-base-100 shadow-xl">
        <h2 className="card-title p-4 "> {title} </h2>

        <figure>
          <img src={image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          {/* =================================================================== */}
          {/* যদি অনেক বড় details হয় তখন নিচের এই নিয়ম মেনে করতে হবে  */}
          {/* =================================================================== */}
          <div>
            {details.length > 200 ? (
              <p className="text-justify">
                {" "}
                {details.slice(0, 200)}{" "}
                <Link to={`/news/${_id}`} className="text-fuchsia-600">
                  {" "}
                  <br /> Read More....{" "}
                </Link>{" "}
              </p>
            ) : (
              <p> {details} </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
