import NewsletterBanner from "../../assets/Images/NewsletterBanner.jpeg";
import { FaArrowRight } from "react-icons/fa6";
import content from "../../content/Reusable/NewsletterRegister.json";

function NewsletterRegister({ lang }) {
  const Content = content[lang]; // Default to English if lang is not found

  return (
    <div className="flex items-center justify-center mb-[5vw] mt-[10vw] max-[450px]:mt-[17vw]">
      <div className="w-[6.5vw] h-[32vw] bg-[#2B00AC] mt-[-3vw] max-[450px]:hidden"></div>
      <div
        style={{ backgroundImage: `url(${NewsletterBanner})` }}
        className="w-[30vw] h-[40vw] bg-cover bg-[center] max-[450px]:absolute max-[450px]:ml-[-70vw] max-[450px]:mt-[-40vw] max-[450px]:h-[35vw]"></div>
      <div>
        <div className="flex justify-center items-center w-[44vw] h-[32vw] bg-[#2B00AC] mt-[-3vw] max-[450px]:w-[90vw] max-[450px]:h-fit max-[450px]:p-[4vw]">
          <div className="w-[90%] text-left text-white">
            <div className="flex max-[450px]:justify-end">
              <h1 className="text-[3.5vw]/[4.2vw] font-bold max-[450px]:text-[6.5vw]/[7.5vw] max-[450px]:w-[70%] max-[450px]:items-right">
                {Content.title}
              </h1>
            </div>
            <p className="text-[1.1vw] w-[80%] mt-[2vw] mb-[2vw] max-[450px]:text-[2.5vw] max-[450px]:mt-[5vw]">
              {Content.description}
            </p>
            <form>
              <div className="flex items-center border-b-[0.4vw] border-[#B8B8B8]">
                <input
                  type="email"
                  placeholder={Content.emailPlaceholder}
                  required
                  className="bg-[#2B00AC] h-[3.5vw] w-full text-[1.2vw] focus-visible:outline-none placeholder:font-normal placeholder:text-white max-[450px]:text-[2.5vw] max-[450px]:h-[5vw]"
                />
                <button
                  type="submit"
                  className="w-[3vw] text-[1.5vw] hover:pl-[1vw] hover:text-[#44c644] cursor-pointer transition-all ease-in-out duration-300 max-[450px]:text-[2.5vw]"
                >
                  <FaArrowRight />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsletterRegister;
