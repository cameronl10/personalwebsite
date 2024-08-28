import ACDSystem from './utilities/images/ACD_Systems_Logo.svg'
import SMUSIcon from './utilities/images/icon-smus.svg'
import SUBCIcon from './utilities/images/1598495774964.svg'
import SAPIcon from './utilities/images/SAP_2011_logo.svg'
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
{        // eslint-disable-next-line
}          <img
            src={props.image}
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
        <h1 className=" m-20 text-center text-4xl font-bold" id="experiencetitle">Experience</h1>

        <div className=" bg-blue-50 items-center justify-center flex flex-col">

        <Card
        image={SAPIcon}
        link="https://www.sap.com/"
        title="SAP"
        caption="Software Engineering Intern"
        location="Vancouver  BC"
        term="January - August 2024"
        skills={['Jenkins','Docker','JavaScript','Java','SQL','CI/CD']}
        description="SAP develops enterprise software to manage business operations and customer relations. The company is the world's leading enterprise resource planning software vendor."
        paragraph="Worked as a Software Engineering Intern in the HANA Analytics and Database team. Implemented, tested and shipped features that would affect customers worldwide. During my time at SAP, I was able to work on many different topics ranging from fullstack software engineering to infrastructure and deployments. My main role was to maintain and develop the file repository system in SAP's Analytic Cloud platform. I developed features, automated testing, bug fixes and infrastructure development in both customer facing components and database components."
        />

        <Card
        image={ACDSystem}
        link="https://www.acdsee.com/en/index/"
        title="ACD Systems"
        caption="QA Analyst"
        location="Victoria BC"
        term="June - August 2021"
        skills={['Test Automation','Quality Assurance Analysis','Test Analysis','SDLC']}
        description="ACD Systems is an independent digital image editing and management company with offices in the United States and Canada. The company was founded in 1994 in Texas by Doug Vandekerkhove. Its products include ACDSee photo editing and management software."
        paragraph="Worked as a QA Analyst mainly focused on web testing. Worked with web developers to  test, refine, and precisely implement the goals outlined by testing guidelines. Created automated Python test cases to verify user flows and gathered requirements for comprehensive testing of UI components across different operating systems and browsers to ensure compatibility. Additionally, I validated payment services using mock payment credentials and collaborated with developers to maintain quality standards for photo editing software. "
        />
        <Card
        image={SUBCIcon}
        link="https://subc.ca"
        title="UBC SUBC Engineering Design Team"
        location="Vancouver BC"
        term="September 2024 - Present"
        description="SUBC, UBC’s Submarine Design Team, is comprised mostly of engineering undergraduate students from a variety of different departments including Mechanical Engineering, Civil Engineering and Engineering Physics. As a team we design, build, test and race a one person human-powered submarine in competitions in England and the United States"
        caption="Software Developer"
        paragraph="Joined the Electrical subteam in the computer vision and data acquisition branch. Current goals are to setup computer vision software to stream video to pilot, display data accquired through microchips and sensors. Future plans are to implement course correction and automated steering algorithims."
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
        paragraph="Worked as a student ambassador with exchange students from Japan for several weeks. I supported their English learning in the classroom and in extracurricular activites. I collaborated with coworkers and supervisors to organize events and develop lesson plans.
        "
        skills={['Collaborative Leadership','Communication','Conflict Resolution','Interpersonal Skills']}
        />
        </div>
        
        </div>
        
    )
}

export default Experience;