import React from "react";

import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} alt="" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe quae
            maiores quas reiciendis? Rerum eum ea a optio architecto sit
            accusantium impedit eius voluptatum officia, dolorem quibusdam
            aspernatur cupiditate nostrum!
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMAPNY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>Collection</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+84931 817 054</li>
            <li>nowf.dev@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
