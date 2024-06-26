"use client";
import { TunisContext } from "@/context/context";
import SectionContainer from "@/layouts/SectionContainer";
import { useContext } from "react";

const Home = ({ authorImage }) => {
  const { changeNav, dark } = useContext(TunisContext);
  return (
    <SectionContainer id="home">
      <div className="bg-accent fixed w-full h-200prcnt -rotate-15 -top-1/2 -left-83prcnt hidden from-lg:block" />
      <div className="flex items-center h-screen w-full down-lg:mx-auto down-lg:justify-center xs:text-left down-lg:text-center ">
        {/* Desktop Image Starts */}
        <img
          className="hidden from-lg:block fixed w-1/3 h-[calc(100vh-80px)] left-40 top-40 rounded-30 shadow-1 object-cover"
          src={authorImage ? authorImage : "assets/img/me.png"}
          alt=""
        />
        {/* Desktop Image Ends */}
        <div className="from-lg:ml-100/3 from-lg:w-2/3">
          <div className="mx-auto max-w-550 custom-md-1:max-w-450">
            {/* Mobile Image Starts */}
            <img
              src="tunis/public/assets/img/me.png"
              className="hidden down-lg:block xs:!hidden rounded-full w-270 h-270 mx-auto mb-25 border-4 border-solid border-black-3"
              alt="my picture"
            />
            {/* Mobile Image Ends */}
            {/* Informations Starts */}
            <h1 className="text-fs-51 text-accent font-Poppins relative uppercase font-bold leading-lh-62 pl-70 before:absolute before:left-0 before:top-29 before:h-4 before:w-40 before:rounded-10 custom-md-2:text-fs-42 down-xl:before:hidden down-xl:pl-0 custom-md-2:leading-lh-52 down-md:text-fs-38 down-md:leading-lh-48 down-md:mt-29 down-md:mb-13 xs:text-fs-29 xs:leading-lh-39 xs:mt-18">
              I'm Gorkem SARI.
              <span className={`block ${dark ? "text-white" : "text-black-6"}`}>
                Computer Programmer
              </span>
            </h1>
            <p className="font-Open-sans mt-15 mb-28 leading-lh-35 down-lg:mt-2.5 down-lg:mb-23 down-lg:text-fs-15 down-lg:leading-lh-30">
            I am an Electrical and Electronic Engineer and a graduate in Computer Programming, specializing in full stack development. With a strong commitment to programming, I excel in building comprehensive software solutions—from server management to user interface design. My goal is to develop software that not only functions efficiently but also enhances the lives of users, making a significant impact on their daily experiences.
            </p>
            <div
              id="link-about"
              className="button group cursor-pointer overflow-hidden inline-block leading-lh-1.4 rounded-30 text-ellipsis text-center align-middle select-none transition-all duration-250 ease-in-out uppercase no-underline relative z-10 py-16 pr-70 pl-35 text-fs-15 font-semibold text-white bg-transparent outline-0 before:absolute before:-z-10 before:left-0 before:right-0 before:top-0 before:bottom-0 before:translate-x-full hover:before:translate-x-0 before:transition before:duration-300 before:ease-out"
              onClick={() => changeNav("about")}
            >
              <span
                className={`relative z-20 ${
                  dark
                    ? "text-white"
                    : "text-black-6 group-hover:text-white transition-all duration-300"
                }`}
              >
                more about me
              </span>
              <span
                className={`absolute -right-px bottom-0 w-55 h-55 flex items-center justify-center rounded-full text-white text-fs-19 fa fa-arrow-right bg-accent`}
              />
            </div>
            {/* Informations Ends */}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Home;
