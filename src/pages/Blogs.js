import React, { useEffect, useState } from 'react';
import BlogPageLaptop from "../assets/Images/blog_page_laptop.png";
import bloglist1 from "../assets/Images/BlogPost1.png";
import bloglist2 from "../assets/Images/BlogPost2.png";
import bloglist3 from "../assets/Images/bloglist3.png";
import BlogsCarousel from "../components/Reusable/BlogsCarousel";
import CallToActionSection from "../components/Reusable/CallToActionSection";
import { useParams } from "react-router-dom";

function Blogs() {
  const {lang} = useParams();

  const [data, setData] = useState('');

  useEffect(() => {
    fetch(`${process.env.REACT_APP_WOUESSI_API_URL}/content`)
      .then(response => response.json())
      .then(data => setData(data.message))
      .catch(error => console.error('Error:', error))
  }, []);


  return (
    <div className="flex justify-center mt-[5vw] mb-[5vw] page-background">
      <div className="w-full">
      <p>{data}</p>
        {/* First Main Heading Div */}
        <div className="flex justify-center">
          <div className="w-[1000px]">
            <div className="relative mb-[7vw]">
              <div
                style={{ backgroundImage: `url(${BlogPageLaptop})` }}
                className="w-[30vw] h-[40vw] bg-cover bg-[center]"></div>
              <div className="absolute top-20 left-80 w-[44vw] h-[28vw] bg-[#2B00AC]">
                <div className="m-[2vw]">
                  <div className="flex items-center mb-[1vw]">
                    <button
                      className="border-white text-white border-[0.2vw] rounded-full px-[1vw] py-[0.2vw] text-[1vw] bg-transparent cursor-pointer hover:text-[#2B00AC] hover:bg-white transition duration-300"
                      disabled>
                      SEO SERVICES
                    </button>
                    <p className="text-[1.1vw] text-white ml-[1vw]">
                      5 MIN Read
                    </p>
                  </div>

                  <div className="w-[90%] text-left text-white">
                    <div className="flex">
                      <h1 className="text-[3.5vw]/[4.2vw] font-bold">
                        Key Reasons Why Your Business Needs Mobile SEO Services
                      </h1>
                    </div>
                    <div className="flex justify-between mt-[3vw]">
                      <p className="text-[1.1vw] w-[80%] mt-[-1vw]">
                        In this comprehensive guide, we delve into the key
                        reasons why your business needs to prioritize Mobile SEO
                        Services for sustainable growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Div */}
        <div className="h-[28vw] bg-[#2B00AC] p-[2vw] mt-[5vw] mb-[2vw]">
          <div className="flex justify-center mb-[3vw]">
            <h1 className="text-[3.5vw]/[4.2vw] font-bold text-white">
              LATEST ARTICLE
            </h1>
          </div>
          <div className="flex justify-around">
            <div className="flex text-left text-white">
              <div className="p-5">
                <div className="mb-[2vw]">
                  <p className="text-[1.4vw] font-bold">
                    Technical SEO Services: Optimize and Rank your Website
                  </p>
                  <p className="text-[1.1vw]">
                    In this comprehensive guide, we'll delve into the world of
                    Technical SEO.
                  </p>
                </div>
                <button
                  className="border-white text-white border-[0.2vw] rounded-full px-[1vw] py-[0.2vw] text-[1vw] bg-transparent cursor-pointer hover:text-white hover:bg-[#D26B2F] transition duration-300"
                  disabled>
                  SEO SERVICES
                </button>
              </div>

              <div className="w-[0.2vw] bg-gray-300 h-[100%]" />

              <div className="p-5">
                <div className="mb-[2vw]">
                  <p className="text-[1.4vw] font-bold">
                    Technical SEO Services: Optimize and Rank your Website
                  </p>
                  <p className="text-[1.1vw]">
                    In this comprehensive guide, we'll delve into the world of
                    Technical SEO.
                  </p>
                </div>
                <button
                  className="border-white text-white border-[0.2vw] rounded-full px-[1vw] py-[0.2vw] text-[1vw] bg-transparent cursor-pointer hover:text-white hover:bg-[#D26B2F] transition duration-300"
                  disabled>
                  SEO SERVICES
                </button>
              </div>

              <div className="w-[0.2vw] bg-gray-300 h-[100%]" />

              <div className="p-5">
                <div className="mb-[2vw]">
                  <p className="text-[1.4vw] font-bold">
                    Technical SEO Services: Optimize and Rank your Website
                  </p>
                  <p className="text-[1.1vw]">
                    In this comprehensive guide, we'll delve into the world of
                    Technical SEO.
                  </p>
                </div>
                <button
                  className="border-white text-white border-[0.2vw] rounded-full px-[1vw] py-[0.2vw] text-[1vw] bg-transparent cursor-pointer hover:text-white hover:bg-[#D26B2F] transition duration-300"
                  disabled>
                  SEO SERVICES
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Third Div */}
        <div className="flex justify-center">
          <div className="w-[80vw]">
            <div className="flex justify-between text-left items-center pt-[2vw] mt-[5vw] mb-[2vw]">
              <div className=" w-[44vw] h-[28vw] ">
                <div className="m-[2vw]">
                  <div className="flex items-center">
                    <button
                      className="border-[#666666] text-[#666666] border-[0.2vw] rounded-full px-[1vw] py-[0.2vw] text-[1vw] bg-transparent cursor-pointer hover:text-white hover:bg-[#666666] transition duration-300"
                      disabled>
                      SEO SERVICES
                    </button>
                    <p className="text-[1.1vw] ml-[1vw]">5 MIN Read</p>
                  </div>
                  <div className="text-left mt-[2vw]">
                    <div className="flex">
                      <h1 className="text-[2vw] font-bold">
                        Technical SEO Services: Optimize and Rank your Website
                      </h1>
                    </div>
                    <div className="flex justify-between mt-[3vw]">
                      <p className="text-[1.1vw] w-[80%] mt-[-1vw]">
                        In this comprehensive guide, we'll delve into the world
                        of Technical SEO.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-[60vw] h-[30vw] bg-cover bg-[center_right_-2vw]"
                style={{ backgroundImage: `url(${bloglist1})` }}></div>
            </div>

            <div className="flex justify-between text-left items-center pt-[2vw] mt-[5vw] mb-[2vw]">
              <div
                className="w-[60vw] h-[30vw] bg-cover bg-[center_right_-2vw]"
                style={{ backgroundImage: `url(${bloglist2})` }}></div>
              <div className=" w-[44vw] h-[28vw] ml-[3vw]">
                <div className="m-[2vw]">
                  <div className="flex items-center">
                    <button
                      className="border-[#666666] text-[#666666] border-[0.2vw] rounded-full px-[1vw] py-[0.2vw] text-[1vw] bg-transparent cursor-pointer hover:text-white hover:bg-[#666666] transition duration-300"
                      disabled>
                      AI
                    </button>
                    <p className="text-[1.1vw] ml-[1vw]">5 MIN Read</p>
                  </div>
                  <div className="text-left mt-[2vw]">
                    <div className="flex">
                      <h1 className="text-[2vw] font-bold">
                        How to Use AI for to Create Content that Converts
                      </h1>
                    </div>
                    <div className="flex justify-between mt-[3vw]">
                      <p className="text-[1.1vw] w-[80%] mt-[-1vw]">
                        This article delves into the realm of AI for content
                        creations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between text-left items-center pt-[2vw] mt-[5vw] mb-[2vw]">
              <div className=" w-[44vw] h-[28vw] ">
                <div className="m-[2vw]">
                  <div className="flex items-center">
                    <button
                      className="border-[#666666] text-[#666666] border-[0.2vw] rounded-full px-[1vw] py-[0.2vw] text-[1vw] bg-transparent cursor-pointer hover:text-white hover:bg-[#666666] transition duration-300"
                      disabled>
                      AI
                    </button>
                    <p className="text-[1.1vw] ml-[1vw]">12 MIN Read</p>
                  </div>
                  <div className="text-left mt-[2vw]">
                    <div className="flex">
                      <h1 className="text-[2vw] font-bold">
                        The Growing Adoption of Integrated AI—Top Business
                        Applications for 2024
                      </h1>
                    </div>
                    <div className="flex justify-between mt-[3vw]">
                      <p className="text-[1.1vw] w-[80%] mt-[-1vw]">
                        Since over half of businesses are using AI, where does
                        that put your company in the marketplace?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-[60vw] h-[30vw] bg-cover bg-[center_right_-2vw]"
                style={{ backgroundImage: `url(${bloglist3})` }}></div>
            </div>
          </div>
        </div>

        <BlogsCarousel/>

        {/* Last Div */}
        <CallToActionSection
          Content="We would love to hear more about your project"
          CallToAction="Let's Talk"
          Title="Work With Us"
          lang ={lang}
        />
      </div>
    </div>
  );
}

export default Blogs;
