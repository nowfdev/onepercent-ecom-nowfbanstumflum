import React from "react";
import Title from "../components/Title";
import NewsLetterBox from "../components/NewsLetterBox";

import { assets } from "../assets/assets";
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"About"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
            recusandae sit vero veritatis itaque? Rem in neque reiciendis
            facilis maxime nisi, repudiandae, ea placeat reprehenderit libero
            magnam inventore. Fuga, esse!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
            id eius praesentium aut voluptas repellendus fuga, obcaecati
            voluptatibus provident porro possimus quam voluptates cum animi
            dicta reprehenderit corporis. Aspernatur, rerum.
          </p>
          <b className="text-gray-600">Our Missions</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            tempore provident error inventore dolorem asperiores sequi.
            Molestiae tempora, excepturi rem soluta omnis praesentium
            voluptatibus debitis, consectetur, laudantium fugiat ducimus sequi.
          </p>
        </div>
      </div>

      <div className="text-2xl py-4 ">
        <Title text1={"Why"} text2={"US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Doloremque, aperiam nostrum quod quos inventore ad atque autem?
            Earum iure voluptas porro esse pariatur, animi suscipit facilis qui
            saepe praesentium dolorem!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Doloremque, aperiam nostrum quod quos inventore ad atque autem?
            Earum iure voluptas porro esse pariatur, animi suscipit facilis qui
            saepe praesentium dolorem!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Service:</b>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Doloremque, aperiam nostrum quod quos inventore ad atque autem?
            Earum iure voluptas porro esse pariatur, animi suscipit facilis qui
            saepe praesentium dolorem!
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
