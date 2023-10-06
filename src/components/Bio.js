import { iconData } from "./data/iconData";
import { iconKey } from "./utilities/icons/IconKeys";

const Skillcard = () =>{
  return(
    <div className="p-10 bg-blue-100 flex justify-center items-center">
      <div className="pb-24 w-3/4 p-4 rounded-lg shadow-lg bg-white">
        <h2 className=" m-3 pb-10 font-light  text-xl">My Skills</h2>
        <div className="flex flex-wrap justify-center"> 
          {iconData.map((icon, id) => (
            <div key={id} className="flex flex-col items-center m-4">
              <img
                src={iconKey(icon)}
                alt={icon}
                className="w-16 h-16" 
              />
              <p className=" m-2">{icon}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}



const Bio = () => {
    return (
      <div>
        <div className="pb-30 mt-20 bg-blue-100 flex flex-col justify-center items-center h-2/3">
          <h1 className="pt-20 font-bold text-4xl">About me!</h1>
          <div className="max-w-screen-md p-4">
            <p className="text-center font-light tracking-wide leading-loose">
              Hi! I'm a software developer currently studying computer science in Vancouver, I have a passion for
              software engineering and design. Having years of experience in OOP and web development
              I'm always open and eager to learn new things such as new tech stacks, computer vision models, AI models and
              data analytics. I enjoy working and collaborating with other people in projects and hackathons but also 
              outside the tech field. I like to play extracurricular sports and listen and play music with others as well!
              Feel free to contact me or view my resume!
            </p>
          </div>
        </div>
        <Skillcard/>
      </div>
    );
  };
  
  
export default Bio;