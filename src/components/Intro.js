import Typewriter from 'typewriter-effect'


const Navbar = () =>{
    return (
        <nav className="bg-white font-light">
        <div className=" w-3/5 mx-auto flex flex-col md:flex-row justify-between items-center p-3">
          <h3 className="text-xl mb-4 md:mb-0 ">Cameron Lee</h3>
          <div className="space-x-4 flex flex-row flex-nowrap pr-10">
            <a href="#experiencetitle"> <h3 className="text-xl">Experience</h3></a>
            <h3 className="text-xl">Projects</h3>
            <h3 className="text-xl">Contact</h3>
            <h3 className="text-xl">Resume</h3>
          </div>
        </div>
      </nav>
    )
}

const Intro = () =>{
    return(
        <>
        <div className="  bg-blue-50 flex flex-col overflow-y-auto pt-6">
            <Navbar/>
            </div>
            <div className=" mt-5 flex-grow flex justify-center items-center text-4xl">
            <div className="text-left max-w-6xl font-light tracking-wider leading-relaxed">
                <Typewriter 
                options={{
                    strings: ["Hi, welcome to my website! I'm Cameron Lee, a computer science student at UBC in Vancouver, Canada."],
                    autoStart: true,
                    loop: 1,
                    pauseFor: 999999999,
                    delay: 65
                }}
                />
            </div>
        </div>


        </>
    )
}
export default Intro;