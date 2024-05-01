import React, { useState, useEffect, Suspense, lazy, useRef } from "react";
import Carousel from "react-multi-carousel";
import SideChat from "../../img/support.svg";
import orbmp4 from "../../img/orb/orb.mp4";
import orbtwitter from "../../img/twitter.png";
import redorbyoutube from "../../img/redorb-youtube.png";
import redorbinsta from "../../img/redorb-insta.png";
import redorbdiscord from "../../img/redorb-discord.png";
import redorbreddit from "../../img/redorb-reddit.png";
import redorbtwitch from "../../img/redorb-twitch.png";
import HV_NEW_AI_Machine from "../../img/new/HV_NEW_AI_Machine_blues (1).png";
import Loader from "../Loading2";
import Customers from "./Customers";
const Hero = lazy(() => import("./Hero"));
const Paragraph = lazy(() => import("./Paragraph"));
const Testimonials = lazy(() => import("./Testimonials"));
const Blogs = lazy(() => import("./Blogs"));
const Spotify = lazy(() => import("./Spotify"));
const PodcastVideo = lazy(() => import("./PodcastVideo"));
const Newsletter = lazy(() => import("./Newsletter"));
const Footer = lazy(() => import("./Footer"));
const Index1 = lazy(() => import("./Teams"));
const Quote = lazy(() => import("./Quote"));
const ChatBot = lazy(() => import("./ChatBot"));
import PocSlider from '../../components/PocSlider/PocSlider'
import CATEN8 from '../../img/poc/CATEN8.png'
import HEIMDALL from '../../img/poc/HEIMDALL.png'
import PLEXTRAC from '../../img/poc/PLEXTRAC.png'
import PROCYON from '../../img/poc/PROCYON.png'
import SENTEON from '../../img/poc/SENTEON.png'
import SPYDERBAT from '../../img/poc/SPYDERBAT.png'
import VIVADERE from '../../img/poc/VIVADERE.png'


const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const carouselRef = useRef(null);

  const images = [CATEN8, HEIMDALL, PLEXTRAC, PROCYON, SENTEON, SPYDERBAT, VIVADERE]

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const handleClick = () => {
    window.open("https://hackerverse.quest/", "_blank");
  };

  useEffect(() => {
    // Simulating loading for 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);



  return (
    <>
      {isLoading && <Loader text={"Hack The *verse!"} />}
      {!isLoading && (
        <>
          <section className="white-th  bg-[#000]    " id="view-down">
          <Hero/>
            <div className="md:py-32 sm:py-24 py-20">
              <div className="custom-container">
                <div className="row md:mb-16 mb-12">
                  <div className="col-md-12">
                    <div className="content-are  ">
                      <article>
                        <div className="primary-heading ">
                          <div className="text-2xl  lg:text-3xl hover-underline uppercase font-rubik">
                            Meet our Rockstar Customers!
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
                <Customers />
                <div className="caption-area text-center bg-transparent mt-16 ">
                  <button
                    onClick={handleClick}
                    className=" rounded-md font-semibold bg-[#a0ff00] hover:text-black hover:bg-[#8cba3e]  text-black w-[300px] py-2 px-4 "
                  >
                    Take me to the Platform!
                  </button>
                </div>
              </div>
            </div>
            <div className="custom-container py-10 bg-[#000]  relative">
              <Quote />
              <div className="col-md-12 mt-28 bg-[#000]">
                <div className="content-are">
                  <article>
                    <div className="primary-heading">
                      <div className=" text-2xl  lg:text-3xl hover-underline uppercase font-rubik">
                        Our Killer POC
                        <sup>
                          <span
                            className="text-2xl  lg:text-3xl hover-underline uppercase font-rubik"
                            style={{ fontSize: 15 }}
                          >
                            TM
                          </span>
                        </sup>{" "}
                        Interface!
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
            <section className="text-gray-600 body-font">
              <div className="w-full py-10 md:px-0 px-10  mx-auto  bg-woodenBg bg-no-repeat bg-center bg-cover">
                <div className=" custom-container lg:p-10 md:p-8 p-[30px] bg-contain  overflow-hidden  bg-no-repeat bg-center  bg-laptop">
                  <Carousel
                    responsive={responsive}
                    focusOnSelect={true}
                    infinite={true}
                    showThumbs={false}
                    showArrows={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    className="custom-carousel md:w-[70%] w-full md:mx-auto"
                    ref={carouselRef}
                  >
                    {images.map((img, index) => (
                      <PocSlider key={index} img={img} />
                    ))}
                  </Carousel>
                </div>
              </div>
            </section>
            <div className="custom-container">
              <div className="caption-area text-center bg-transparent mt-14 flex justify-center items-center max-w-80 w-full mx-auto">
                <button
                  onClick={handleClick}
                  class=" rounded-md font-semibold bg-[#a0ff00] hover:text-black text-black hover:bg-[#8cba3e] w-[300px]  py-2 px-4 "
                >
                  Take me to the Platform!
                </button>
              </div>
            </div>
            <div className="w-full md:py-32 sm:py-24 py-20">
              <div className="content-are">
                <article>
                  <div className="primary-heading mb-10 lg:mb-16">
                    <div className="title-lg text-2xl  lg:text-3xl font-rubik  hover-underline ">
                      How it Works
                    </div>
                  </div>
                </article>
                <section className="text-gray-600 body-font">
                  <div className="container mx-auto">
                    <div className="flex justify-center">
                      <img
                        loading="lazy"
                        src={HV_NEW_AI_Machine}
                        className="rounded-3xl max-w-[1200px] w-full h-full"
                        alt="How it Works - AI Machine"
                      />
                    </div>
                  </div>
                </section>
              </div>
              <div className="caption-area text-center bg-transparent mt-14">
                <button
                  onClick={handleClick}
                  class=" rounded-md font-semibold bg-[#a0ff00] hover:text-black min-w-[300px]  text-xs sm:text-base hover:bg-[#8cba3e]  py-2 px-4 "
                >
                  Take me to the Platform!
                </button>
              </div>
            </div>

            <div className="bg-[#1D1D1D]  bg-cover  bg-no-repeat bg-center bg-pattern">
              <Paragraph />
            </div>

            <div className="col-md-12 relative custom-container">
              <Testimonials />
              <Index1 />
            </div>
            <div className="col-md-12 custom-container">
              {/* <Blogs /> */}
              <Spotify />
              <PodcastVideo />
              <Newsletter />
            </div>
            <Footer />
          </section>

          <ChatBot />
        </>
      )}
      ;
    </>
  );
};

export default Index;
