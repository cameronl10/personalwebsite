import { iconData } from "./data/iconData";
import { iconKey } from "./utilities/icons/IconKeys";
import resume from './utilities/cameronleesresume2024 (11).pdf'

const Skillcard = () =>{
  return(
    <div className="p-10 bg-blue-50 flex justify-center items-center">
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
        <div className="pb-30 mt-20 bg-blue-50 flex flex-col justify-center items-center h-2/3">
          <h1 className="pt-20 font-bold text-4xl">About me!</h1>
          <div className="max-w-screen-md p-4">
            <p className="text-center font-light tracking-wide leading-loose">
              Hi! I'm a UBC computer science originally from Victoria. I have a passion for software engineering and design. I have technical experience as a Software Engineer and  QA analyst and personal experience in OOP, web development, computer vision and robotics. Outside of the tech field I like to listen and play music, play sports with my friends and read science fiction and philosophy. Feel free to contact me or view my <a className=" text-blue-500" href={resume}>resume!</a>
            </p>
          </div>
        </div>
        <Skillcard/>
      </div>
    );
  };
  
  
export default Bio;