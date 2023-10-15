import { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import {AiFillGithub, AiFillFile} from 'react-icons/ai';
import FIRST_LOGO from './utilities/images/first-tech-challenge-vector-logo.svg'
import BATTLESNAKE_LOGO from './utilities/images/battlesnake-logo-nav-2022-light.svg'
import TIME2EAT from './utilities/images/Time.17a28511486c08fb8fbd (1).svg'
import CL from './utilities/images/CL2.svg'
import CONSTELLATION from './utilities/images/872996-200.svg'
const Skills = (props) => {
  const skillsList = props.skills.map((skill, index) => (
    <div key={index} className="bg-blue-200 text-blue-700  text-center rounded-full  h-10  p-2 m-1">
      {skill}
    </div>
  ));

  return (
    <div className="mt-4 flex flex-wrap">{skillsList}</div>
  );
};

const Card = (props) => {
    return (
        <div className=" m-2 flex justify-center items-center">
            <div className="md:m-9 bg-white  shadow-xl rounded-md md:flex  w-3/4">
            <div className="w-full md:w-1/4 p-4 flex items-center justify-center">
                    <img
                        src={props.image}
                        alt="Your Image"
                        className="max-h-full max-w-full object-contain"
                    />
                </div>
                <div className="w-full md:w-3/4 p-4">
                    <div className="flex flex-col z-10">
                        <a
                            href={props.link}
                            className="mt-3 text-blue-500 hover:underline text-lg"
                            style={{ zIndex: 1 }} 
                        >
                            {props.title}
                        </a>
                        <div className="w-full md:w-3/4    flex flex-wrap">
                        {props.hasGitHub ?  
                        <div className="flex items-center">
                        <a
                            href={props.githubLink} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-500 text-white rounded-md py-2 px-4 mt-2 hover:bg-blue-600 inline-block"
                            style= {{ zIndex: 1 }} 
                        >
                        <div className="flex items-center">
                                      <AiFillGithub size={24} />
                                      <span className="ml-2">GitHub</span>
                                    </div>
                        </a> 
                        </div>
                        : <div/>
                        }
                        {props.hasOther ?  
                        <div className="flex items-center ml-2 ">
                        <a
                            href={props.otherLink} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-500 text-white rounded-md py-2 px-4 mt-2 hover:bg-blue-600 inline-block"
                            style= {{ zIndex: 1 }} 
                        >
                          <a href={props.otherLink}>
                          <div className="flex items-center">
                                      <AiFillFile size={24} />
                                      <span className=" ml-2">Check it out!</span>
                                    </div>
                                    </a>
                        </a> 
                        </div>
                        : <div/>
                        }
                       
                    </div>
                        <p className="text-gray-600 text-lg font-bold">{props.caption}</p>
                        <p className="text-gray-600 text-sm">{props.location}</p>
                        <p className="text-gray-600 text-sm">{props.term}</p>
                        <p className="mt-3 text-gray-600 text-sm  font-light italic">{props.description}</p>
                    </div>
                    <div className="mt-4">
                        <p className="text-gray-800 font-light  leading-relaxed">{props.paragraph}</p>
                    </div>
                    <Skills skills={props.skills} /> 
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
<div className="bg-blue-50 md:m-20 overflow-hidden relative w-full p-4 md:p-10">
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
            image: FIRST_LOGO,
            link: "https://www.firstinspires.org/robotics/ftc",
            title: "FIRST Tech Challenge",
            caption: "Lead Software Engineer",
            location: "Victoria BC",
            term: "November 2018 - March 2022",
            description: "FIRST Tech Challenge (FTC), formerly known as FIRST Vex Challenge, is a robotics competition for students in grades 7–12 to compete head to head, by designing, building, and programming a robot to compete in an alliance format against other teams. FIRST Tech Challenge is the one of the four major robotics programs organized by FIRST",
            paragraph: "During this competiton, I was in charge of writing the software for our robot. My roles included creating autonomus code that utilized sensor and camera data to complete different tasks and objectives and to design the driving and motor functions of the robot.",
            hasGitHub: true,
            skills: ['Java','OpenCV','DAQ','Computer Vision','Robotics Software'],
            githubLink: "https://github.com/cameronl10/UltimateGoal2021"
          },
          {
            image: BATTLESNAKE_LOGO,
            link: "https://play.battlesnake.com/",
            title: "Battlesnake",
            caption: "Battlesnake Competition",
            location: "Victoria BC",
            term: "Mar 2019",
            description: "Battlesnake is an AI competition based on the traditional snake game where developers created AI snake to compete against different snakes.",
            paragraph: "Used Python to design and implement an algorithim for autonomus snake on various 2D matrices to complete obstacle avoidance and food consumption.",
            hasGitHub: true,
            hasOther: true,
            otherLink: "https://play.battlesnake.com/",
            skills:['Python','Tree Searching Algorithims','Data Structures','Matrix Traversal'],
            githubLink:"https://github.com/cameronl10/battlesnake-python"
          },
          {
            image: CONSTELLATION,
            link:"https://github.com/cameronl10/ConstellationGame",
            title: "Constellation Game",
            caption:"CPSC 210 Project",
            location: "Vancouver BC",
            term:"Feb 2023",
            paragraph:"A Java constellation trivia/learning game! Created for CPSC 210 at UBC.",
            hasGitHub: true,
            skills:['Java','JUnit','JSwing','json'],
            githubLink:"https://github.com/cameronl10/ConstellationGame"
          
          },
          {
            image: CL,
            link:"#introtitle",
            title: "This website!",
            caption:"Personal Portfolio",
            location: "Vancouver BC",
            term:"October 2023",
            paragraph:"The website you are currently on! A responsive website built in ReactJS and Tailwind CSS.",
            hasGitHub: true,
            hasOther: true,
            otherLink: "#introtitle",
            skills:['React','Tailwind CSS','Javascript','HTML5'],
            githubLink:"https://github.com/cameronl10/personalwebsite"
          
          },
          {
            image: TIME2EAT,
            link: "https://eriklsy.github.io/nwHacks2023/",
            title: "Time2Eat",
            caption:"nwHacks 2023",
            location: "Vancouver BC",
            term: "Jan 2023",
            description:"Western Canada's largest 24 hour hackathon.",            
            paragraph:"Beginner submission for nwHacks 2023, created in 24 hours by beginner programmers. Developed a web-based application that utilizes user input to generate personalized restaurant recommendations based on individual preferences.",
            hasGitHub: true,
            hasOther: true,
            otherLink: "https://eriklsy.github.io/nwHacks2023/",
            skills:['React','Google Maps API', 'Google Places API','Javascript','ExpressJS','Node.js'],
            githubLink:"https://github.com/eriklsy/nwHacks2023"
          },
    ]
    return (
        <div className=" bg-white flex flex-col items-center justify-center">
            <h1 className="mt-20 text-center text-4xl font-bold" id="projecttitle">Projects</h1>
            <Carousel slides={ProjectData} />
        </div>
    );
};

export default Project;
