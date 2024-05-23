"use client";
import { TunisContext } from "@/context/context";
import SectionContainer from "@/layouts/SectionContainer";
import { useContext } from "react";
import SectionTitle from "./SectionTitle";

const items = [
  {
    id: 1,
    title: "RESUME",
    name: "RESUME",
    type:"Personal",
    src: "asds",
    img: "assets/img/projects/cv.png",
    // project: "Personal",
    link: <a href="assets/img/projects/Resume.docx"target="_blank">Download</a>,
    langages: "MS Word",
  },
  {
    id: 2,
    title: "Transcripts",
    name: "TRANSCRIPT",
    type: " ",
    src: "",
    img: "assets/img/projects/degree.webp",
    client: "Envato",
    langages: "Digital Documents",
    link: <a href="assets/img/projects/transcript.jpg" target="_blank">Engineering Transcript</a>,
    project: <a href="assets/img/projects/Transcript.pdf"target="_blank">Programming Transcript</a>
    
  },
  {
    id: 3,  
    title: "Poker News Website",
    name: "Coming Soon",
    type: "img",
    src: "",
    link:"Coming soon",
    img: "assets/img/projects/pokercard.jpeg",
    // project: "Next.js Website",
    langages: "HTML, CSS, Javascript, Next.js",
  },
  
  {
    id: 4,
    title: "",
    name: "Coming Soon",
    type: "img",
    src: "",
    img: "assets/img/projects/csoon.jpeg",
    client: "Envato",
    langages: ""
  },
  {
    id: 5,
    title: "",
    type: "img",
    name: "Coming Soon",
    src: "",
    img: "assets/img/projects/csoon.jpeg",
    client: "Envato",
    langages: "",
  },
  {
    id: 6,
    title: "",
    type: "img",
    name: "Coming Soon",
    src: "",
    img: "assets/img/projects/csoon.jpeg",
    // project: "Website",
    client: "Envato",
    langages: "",
  },
  // {
  //   id: 7,
  //   title: "Image Project",
  //   type: "img",
  //   src: "",
  //   img: "assets/img/projects/project-7.jpg",
  //   // project: "Website",
  //   client: "Envato",
  //   langages: "HTML, CSS, Javascript",
  //   previewLink: "www.envato.com",
  // },
  // {
  //   id: 8,
  //   title: "Image Project",
  //   type: "img",
  //   name: "Coming Soon",
  //   src: "",
  //   img: "assets/img/projects/project-8.jpg",
  //   // project: "Website",
  //   client: "Envato",
  //   langages: "HTML, CSS, Javascript",
  //   previewLink: "www.envato.com",
  // },
  // {
  //   id: 9,
  //   title: "Image Project",
  //   type: "img",
  //   name: "Coming Soon",
  //   src: "",
  //   img: "assets/img/projects/project-9.jpg",
  //   // project: "Website",
  //   client: "Envato",
  //   langages: "HTML, CSS, Javascript",
  //   // previewLink: "www.envato.com",
  // },
];


const Portfolio = () => {
  const { popupToggle } = useContext(TunisContext);
  return (
    <SectionContainer id="portfolio">
      <div className="w-full pb-60">
        {/* Section Title Starts */}
        <SectionTitle
          bigTitle={"works"}
          colorTitle={"portfolio"}
          normalTitle={"my"}
        />
        {/* Section Title Ends */}
        {/* Portfolio Items Starts */}
        <div className="-mt-15 pb-60 xs:pb-20 portfolio">
          <div
            id="grid-gallery"
            className="xl:max-w-1140 custom-md-3:max-w-[calc(100%-195px)] md:max-w-720 sm:max-w-540 xs:max-w-full mx-auto"
          >
            {/* Portfolio Grid Starts */}
            <div className="grid-wrap mx-auto mb-25">
              <ul className="gridlist">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="w-1/3 down-lg:w-1/2 xs:w-full float-left cursor-pointer p-15 xs:px-0"
                    onClick={() => popupToggle(item)}
                  >
                    <figure className="transition duration-300 rounded-5 relative overflow-hidden">
                      <img
                        className="block relative w-full rounded-5 transition duration-300"
                        src={item.img}
                        alt=""
                      />
                      <div className="absolute w-full h-full flex items-center justify-center bg-accent">
                        <span className="uppercase text-fs-18 text-white">
                          {item.name}
                        </span>
                      </div>
                    </figure>
                  </li>
                ))}
              </ul>
            </div>
            {/* Portfolio Grid Ends */}
          </div>
        </div>
        {/* Portfolio Items Ends */}
      </div>
    </SectionContainer>
  );
};
export default Portfolio;

