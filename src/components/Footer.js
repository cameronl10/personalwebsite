import { AiFillLinkedin, AiFillGithub,AiTwotoneMail } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="w-screen h-5/6 pt-32 pb-32 bg-white text-center">
      <h1 className="font-light text-black-200 text-xl" id="footertitle">Contact me here!</h1>
      <div className="flex justify-center mt-4">
        <a href="https://www.linkedin.com/in/cameron-lee-0506891b3/">
          <AiFillLinkedin className="w-16 h-16 rounded-full hover:opacity-75 transition duration-300 ease-in-out mr-4" />
        </a>
        <a href="https://github.com/cameronl10">
         <AiFillGithub className="w-16 h-16 rounded-full hover:opacity-75 transition duration-300 ease-in-out mr-4"/>
        </a>
        <a href="mailto:cameronleenicolas@gmail.com">
         <AiTwotoneMail className="w-16 h-16 rounded-full hover:opacity-75 transition duration-300 ease-in-out mr-4"/>
        </a>
      </div>
      <p className="mt-4 font-light text-gray-500">Made by Cameron Lee :)</p>
    </div>
  );
}

export default Footer;
