import React, { useEffect, useState } from "react";
// import gif1 from "../../img/new/gif.gif";
import { Link } from "react-router-dom";
import exploreImages from "../../img/explore/explore";
import gif1 from "../../img/new/GREEN_lightning_short_1.gif";
import greenLight from "../../img/HV_LIGHTNINGbolt_OVALblur_green_noFloor_short_300x1080_stringed.mp4";



const Paragraph = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setData([
        {
          id: "1",
          title: "Integrate",
          txt: "Integrate like a boss! The HACKERverse® syncs with your tools, tech-stack, and CRM.",
          icon: exploreImages[0],
        },
        {
          id: "2",
          title: "Scale",
          txt: "Easily scale your PoC process and free up your team’s time.",
          icon: exploreImages[1],
        },
        {
          id: "3",
          title: "Velocity",
          txt: "Faster Time to close won. Buyers crave hands-on experiences and self-driven sales motions.",
          icon: exploreImages[2],
        },
        {
          id: "4",
          title: "Continuous",
          txt: "Get continuous product feedback from customers experiencing your Hands-On PoC.",
          icon: exploreImages[3],
        },
        {
          id: "5",
          title: "Community",
          txt: "Our thriving HACKERverse® community gives you access to 5,000 practitioners and security team leaders.",
          icon: exploreImages[4],
        },
      ]);
    }, 200);
  }, [exploreImages]);

  const handleClick = () => {
    window.open("https://hackerverse.quest/", "_blank");
  };

  return (
    <>
      <section className="text-gray-600 body-font pt-10 relative opacity-80 bg-black"
      // style={{ background: `url(${gif1}) center center / cover no-repeat` }}
      >
        <div className="container px-5 mx-auto relative">
          <video autoPlay muted loop className="absolute top-0 lg:left-32 left-0 m-auto max-w-[500px] max-h-[500px] w-full z-0">
            <source src={greenLight} type="video/mp4" />
          </video>
          <div className=" mx-auto  relative z-10">
            <div className=" flex lg:flex-wrap lg:flex-row flex-col items-center justify-center -mx-4 -mb-10 sm:gap-5 gap-2  ">
              {data.map((item) => (
                <div
                  key={item.id}
                  className="flex-col  w-full lg:w-2/5 flex items-center justify-start sm:mb-10 md:px-12 sm:px-8 mt-16 min-h-[200px]"
                >
                  <img src={item.icon} alt="icon" className="object-contain max-w-12 w-full" />
                  <h2 className="title-font sm:text-3xl text-2xl font-medium text-white mt-2 mb-3 font-rubik">
                    {item.title}
                  </h2>
                  <p className="leading-relaxed sm:text-lg text-md text-white font-poppins text-center">
                    {item.txt}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="caption-area text-center bg-transparent mt-16 mb-24">
            <button
              onClick={handleClick}
              className="rounded-md font-semibold bg-[#a0ff00] text-black w-[300px] text-sm sm:text-base hover:text-black hover:bg-[#8cba3e] py-2 px-4 mb-14"
            >
             Take me to the Platform
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Paragraph;