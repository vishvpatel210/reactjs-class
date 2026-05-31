import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Social() {
  return (
    <div>
      <h1 className="py-16 text-center">
        Trusted By <span className="text-blue-500">20k+</span>users worldWide
      </h1>
      <div className="flex justify-center items-center gap-10 text-4xl text-gray-600">
        <FaGithub className="hover:text-black cursor-pointer"/>
        <FaTwitter className="hover:text-black cursor-pointer"/>
        <FaLinkedin className="hover:text-black cursor-pointer"/>
        <FaInstagram className="hover:text-black cursor-pointer"/>
      </div>
    </div>
  );
}
