import { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import ACD_Systems_Logo from './utilities/images/ACD_Systems_Logo.svg'


const Card = (props) => {
    return (
        <div className=" m-2 flex justify-center items-center">
            <div className="md:m-9 bg-white  shadow-xl rounded-md md:flex  w-3/4">
                <div className="w-full md:w-1/4 p-4 flex items-center">
                    <img
                        src={props.image}
                        alt="Your Image"
                        className="h-auto md:h-full object-none"
                    />
                </div>
                <div className="w-full md:w-3/4 p-4">
                    <div className="flex flex-col">
                        <a
                            href={props.link}
                            className="mt-3 text-blue-500 hover:underline text-lg"
                            style={{ zIndex: 1 }} 
                        >
                            {props.title}
                        </a>
                        <div className="w-full md:w-3/4">

                        </div>
                        <p className="text-gray-600 text-lg font-bold">{props.caption}</p>
                        <p className="text-gray-600 text-sm">{props.location}</p>
                        <p className="text-gray-600 text-sm">{props.term}</p>
                        <p className="mt-3 text-gray-600 text-sm  font-light italic">{props.description}</p>
                    </div>
                    <div className="mt-4">
                        <p className="text-gray-800 font-light  leading-relaxed">{props.paragraph}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
const Carousel = (props) => {
    const [curr, setCurr] = useState(0);
  
    const prev = () =>
      setCurr((curr) => (curr === 0 ? props.slides.length - 1 : curr - 1));
    const next = () =>
      setCurr((curr) => (curr === props.slides.length - 1 ? 0 : curr + 1));
  
    const goToSlide = (index) => {
      setCurr(index);
    };
  
    return (
      <div className="bg-blue-50   md:m-20 overflow-hidden relative w-full md:w-1/2 p-4 md:p-10">
        <Card {...props.slides[curr]} />
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            className="hidden md:block p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white ml-4"
            onClick={prev}
          >
            <ChevronLeft size={40} />
          </button>
          <button
            className="hidden md:block p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white mr-4"
            onClick={next}
          >
            <ChevronRight size={40} />
          </button>
        </div>
  
        <div className="absolute bottom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {props.slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`
                  transition-all w-3 h-3 bg-slate-500 rounded-full
                  ${curr === i ? "p-2" : "bg-opacity-50"}
                `}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  
  

const Project = () => {
    const ProjectData = [
        {
            image: ACD_Systems_Logo,
            link: "https://example.com",
            title: "Card 1",
            caption: "Caption 1",
            location: "Location 1",
            term: "Term 1",
            description: "Description 1",
            paragraph: "Paragraph 1",
          },
          {
            image: ACD_Systems_Logo,
            link: "https://example.com",
            title: "Card 2",
            caption: "Caption 2",
            location: "Location 2",
            term: "Term 2",
            description: "Description 2DescriptionDescriptionDescription",
            paragraph: "Paragraph 2Paragraph 2Paragraph 2Paragraph 2Paragraph 2Paragraph 2",
          },
    ]
    return (
        <div className=" bg-blue-50 text-4xl flex flex-col items-center justify-center">
            <h1 className="mt-20 text-center text-4xl font-bold" id="projecttitle">Projects</h1>
            <Carousel slides={ProjectData} />
        </div>
    );
};

export default Project;
