// import React from 'react';
import { AiOutlineGithub, AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import QZone1 from "../../../assets/qZone1.png";
import QZone2 from "../../../assets/qZone2.png";
import QZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div className="px-3 ">
      <div className="p-4 space-y-3">
        <h2>Login With </h2>
        <button className="  btn w-full btn-outline">
          <AiOutlineGoogle></AiOutlineGoogle>
          Google{" "}
        </button>
        <button className="btn w-full btn-outline">
          <AiOutlineGithub></AiOutlineGithub>
          Git Hub{" "}
        </button>
      </div>
      {/*find us */}
      <div className="pt-4 mt-2  rounded-t-lg space-y-3">
        <h2 className="pl-4 text-3xl ">Find Us On </h2>
        <div className="border">
          <a href="" className="p-4 border-b  text-lg items-center flex">
            <FaFacebookF className="mr-2"></FaFacebookF>
            Facebook
          </a>
          <a href="" className="p-4 border-b text-lg items-center flex">
            <FaInstagram className="mr-2"></FaInstagram>
            Instagram
          </a>
          <a href="" className="p-4  text-lg items-center flex">
            <FaTwitter className="mr-2"></FaTwitter>
            Twitter
          </a>
        </div>
      </div>
      {/*Q zoon */}
      <div className="pt-4   mt-2   rounded-t-lg space-y-3">
        <h2 className="pl-4 text-5xl ">Q Zone </h2>
        <div>
          <img src={QZone1} alt="" />
          <img src={QZone2} alt="" />
          <img src={QZone3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
