import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Api } from "../../Api/Api";

const Index = () => {
  const [Blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${Api}/hv-comapny/Blog/getall`);
      const latestBlogs = response.data.slice(0, 3); // Fetch only the latest 3 blogs
      setBlogs(latestBlogs);
    } catch (error) {
      console.error("Error fetching Blogs:", error);
    }
  };

  const htmlToPlainText = (html) => {
    let doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <section className="">
        <div className="mx-auto max-w-screen-xl text-center   ">
          <div className="mx-auto   max-w-screen-sm ">
            <h2 className="mb-14 text-2xl  lg:text-3xl uppercase font-rubik tracking-tight font-extrabold hover-underline text-white dark:text-white">
              Our Blogs
            </h2>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font ">
        <div className="container sm:px-5 py-10 mx-auto">
          <div
            className="flex-col lg:flex-row flex  gap-6 w-full"
            id="blog-list"
          >
            {Blogs.length === 0 ? ( // Check if there are no Blogs
              <div className="flex justify-center items-center h-5 ">
                <p className="text-xl text-gray-300">No Blog available</p>
              </div>
            ) : (
              <>
                {Blogs.map((member) => (
                  <Link
                    to={`/blog/${member._id}`}
                    className="sm:px-4 cursor-pointer "
                  >
                    <div className="h-full  bg-[#1D1D1D]  rounded-lg overflow-hidden picbox">
                      <img
                        loading="lazy"
                        className="sm:h-72 w-full object-cover object-center"
                        src={member.pic}
                        alt="blog"
                      />
                      <div className="p-6">
                        <h1 className="title-font text-lg font-medium text-gray-300 mb-3">
                          {member.title.split(" ").slice(0, 30).join(" ")}
                          {member.title.split(" ").length > 30 ? "..." : ""}
                        </h1>
                        <p className="leading-relaxed mb-3 text-gray-600">
                          {htmlToPlainText(
                            member.content.split(" ").slice(0, 10).join(" ")
                          )}
                          {htmlToPlainText(
                            member.content.split(" ").length > 10 ? "..." : ""
                          )}
                        </p>
                        <div className="flex items-center flex-wrap">
                          <a className="text-[#a0ff00] inline-flex items-center md:mb-2 lg:mb-0 ">
                            Learn More
                            <svg
                              className="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 12h14" />
                              <path d="M12 5l7 7-7 7" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </>
            )}
          </div>
          <div className="text-center mt-16  mx-auto rounded-md  font-semibold bg-[#a0ff00] text-black w-[300px] text-sm sm:text-base hover:text-black hover:bg-[#8cba3e]  py-2 px-4">
            <Link
              to="/allblogs"
              className=""
            >
              View all
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
