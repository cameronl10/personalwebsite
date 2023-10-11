import ACDSystem from './utilities/images/ACD_Systems_Logo.svg'
import SMUSIcon from './utilities/images/icon-smus.svg'
import SUBCIcon from './utilities/images/1598495774964.svg'
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
            >
              {props.title}
            </a>
            <div className="w-full md:w-3/4">
          <Skills skills={props.skills} /> 
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




const Experience = () =>{
    return(
        <div>
        <h1 className=" m-20 text-center text-4xl font-bold">Experience</h1>

        <div className=" bg-blue-50 items-center justify-center flex flex-col" id="experiencetitle">
        <Card
        image={ACDSystem}
        link="https://www.acdsee.com/en/index/"
        title="ACD Systems"
        caption="QA Analyst"
        location="Victoria BC"
        term="June - August 2021"
        skills={['Test Automation','Quality Assurance Analysis','Test Analysis','SDLC']}
        description="ACD Systems is an independent digital image editing and management company with offices in the United States and Canada. The company was founded in 1994 in Texas by Doug Vandekerkhove. Its products include ACDSee photo editing and management software."
        paragraph="• Developed end-to-end automated Python test cases that would verify user flows were at the correct state.
        • Gathered requirements for comprehensive test cases to ensure UI components were working end-to-end.
        • Tested a variety of UI components on different operating systems and browsers to ensure compatibility.
        • Validated payment services using mock payment credentials to ensure that orders were able to be placed.
        • Collaborated with web and software developers on photo editing software to ensure quality standards were met."
        />
        <Card
        image={SUBCIcon}
        link="https://subc.ca"
        title="UBC SUBC Engineering Design Team"
        location="Vancouver BC"
        term="September 2024 - Present"
        description="SUBC, UBC’s Submarine Design Team, is comprised mostly of engineering undergraduate students from a variety of different departments including Mechanical Engineering, Civil Engineering and Engineering Physics. As a team we design, build, test and race a one person human-powered submarine in competitions in England and the United States"
        caption="Software Developer"
        paragraph="Implementing computer vision and Data acquisition system into electrical system of submarine for sensors and orientaion data through raspberry pi and microchips "
        skills={['Computer Vision','Python','OpenCV','DAQ','Raspberry Pi']}
        />
                <Card
        image={SMUSIcon}
        link="https://www.smus.ca"
        title="Saint Michaels University School International Program"
        caption="Student Cultural Ambassador"
        location="Victoria BC"
        term="July - August 2019"
        description="St. Michaels University School (abbreviated SMUS) is an independent day and boarding school in the municipality of Saanich, the largest and most populous municipality in the Capital Regional District and on Vancouver Island. "
        paragraph="• Engaged with students from Japan to help them in their English within their classes and extracurricular activities.
        • Communicated with managers to set up campus events and prepare lesson plans.
        • Resolved conflicts between students and teachers through mediating and providing solutions to mitigate future
        conflicts.
        "
        skills={['Collaborative Leadership','Communication','Conflict Resolution','Interpersonal Skills']}
        />
        </div>
        
        </div>
        
    )
}

export default Experience;