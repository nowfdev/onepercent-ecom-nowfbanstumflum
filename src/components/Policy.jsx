import React from "react";
import { assets } from "../assets/assets";

const Policy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-md md:text-base text-gray-700">
      <div className="">
        <img src={assets.exchange_icon} className="w-12 m-auto mb-5" />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">Free to exchange</p>
      </div>
      <div className="">
        <img src={assets.quality_icon} className="w-12 m-auto mb-5" />
        <p className="font-semibold">3 Months HyperCare</p>
        <p className="text-gray-400">
          We provide 3 months{" "}
          <span className="font-bold text-red-700">hypercare</span> for your
          product purchase.
        </p>
      </div>

      <div className="">
        <img src={assets.support_img} className="w-12 m-auto mb-5" />
        <p className="font-semibold">Best Customer Support</p>
        <p className="text-gray-400">We provide 24/7 services</p>
      </div>
    </div>
  );
};

export default Policy;
