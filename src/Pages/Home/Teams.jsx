import React, { useEffect, useState, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { Api } from "../../Api/Api";
import { Link } from "react-router-dom";
import CustomDot from "../../components/CustomDot/CustomDot";
import background from "../../img/pagebackground.png";

const Index = () => {
  const [Team, setTeam] = useState([]);
  const carouselRef = useRef(null);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1500 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1500, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 760 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 760, min: 0 },
      items: 1,
    },
  };

  const fetchTeam = async () => {
    try {
      const response = await axios.get(`${Api}/hv-comapny/team/getall`);
      setTeam(response.data);
    } catch (error) {
      console.error("Error fetching Team:", error);
    }
  };

  useEffect(() => {
    fetchTeam();
  }, []);
  const handleClick = () => {
    window.open("https://hackerverse.quest/", "_blank");
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const nextSlide = carouselRef.current.state.currentSlide + 1;
        const totalSlides = carouselRef.current.state.totalItems;
        const resetIndex = nextSlide >= totalSlides ? 0 : nextSlide;
        carouselRef.current.goToSlide(resetIndex);
      }
    }, 8000); // Adjust the interval time (in milliseconds) as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="bg-black">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:px-6 ">
          <div className="mx-auto max-w-screen-sm ">
            <h2 className=" text-2xl  lg:text-3xl cursor-pointer tracking-tight font-extrabold uppercase sm:mb-8 font-rubik hover-underline text-white dark:text-white">
              Our team
            </h2>
          </div>
        </div>
      </section>
      <Carousel
        responsive={responsive}
        ref={carouselRef}
        infinite={true}
        className="w-full mx-auto pb-10 carousel-nav"
        showDots
        customDot={<CustomDot />}
        focusOnSelect={true}
        direction="rtl" // Change direction to "rtl" for right-to-left rotation
      >
        {Team.map((member) => (
          <div
            key={member.id}
            className="text-center text-[#a0ff00] flex flex-col justify-center dark:text-gray-400 cursor-pointer rounded-2xl  "
          >
            <div className="h-[280px] w-[230px] relative  mb-4 mx-auto">
              <div className="top-10 left-0 right-0 m-auto absolute bg-black opacity-35">
                {/* <img
                  src={background}
                  alt="pattern"
                  className="w-[220px] h-[220px] rounded-full "
                /> */}
              </div>
              <div className=" h-[200px] w-full hover:bg-lighteningEffect bg-no-repeat bg-cover bg-center absolute bottom-0 mx-auto">
                <img
                  className="mx-auto  w-full absolute bottom-0  z-40  h-[200px] left-0 right-0 object-contain"
                  src={member.pic}
                  loading="lazy"
                  alt={`${member.name}'s Avatar`}
                />
              </div>
            </div>
            <h2 className="mb-1 text-2xl text-center font-medium tracking-tight  mx-auto ">
              <p href="#">{member.name}</p>
            </h2>
            <p className="text-gray-500">{member.designation}</p>
            <ul className="flex justify-center mt-4 space-x-4"></ul>
          </div>
        ))}
      </Carousel>
      ;
      <div className="caption-area text-center bg-transparent  sm:mt-5 mb-24 ">
        <button
          onClick={handleClick}
          class=" rounded-md font-semibold text-black bg-[#a0ff00] w-[300px] text-sm sm:text-base hover:text-black hover:bg-[#8cba3e]  py-2 px-4 "
        >
          Take me to the Platform!
        </button>
      </div>
    </>
  );
};

export default Index;
