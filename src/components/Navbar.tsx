import "../styles/Navbar.scss";
import { HiMenuAlt1 } from "react-icons/hi";
import facebook from "../assets/facebook-round-color-icon.svg";
import instagram from "../assets/instagram-round-color-icon.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsChevronLeft } from "react-icons/bs";
const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const includesSnippetRoute = location.pathname.split("/").includes("snippet");

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" h-[60px] flex items-center   shadow-3xl sticky top-0 left-0 w-full bg-[#f5f5f5]">
      <div className="max-w-6xl grid grid-cols-3 md:grid-cols-3 items-center w-full mx-auto">
        {!includesSnippetRoute ? (
          <div className="flex md:hidden">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className=" text-2xl ml-2 cursor-pointer"
            >
              {!isOpen ? <HiMenuAlt1 /> : <AiOutlineClose />}
            </div>
          </div>
        ) : (
          <div className="md:hidden text-2xl ml-2 cursor-pointer">
            <BsChevronLeft
              onClick={() => {
                navigate(-1);
              }}
            />
          </div>
        )}
        <div className="hidden md:flex  text-md font-bold space-x-4">
          <Link to={`/about`}>About</Link>
          <Link to={`/contact`}>Contact</Link>
        </div>
        <Link to={`/`} className="website-name">
          Itihaaz
        </Link>
        <div className="hidden md:flex items-center space-x-4 justify-end">
          <div>
            <img src={facebook} height={24} width={24} alt="" />
          </div>
          <div>
            <img src={instagram} height={24} width={24} alt="" />
          </div>
        </div>
      </div>
      <div
        className={`${
          !isOpen ? "left-[-1000px]" : "left-0"
        } fixed flex flex-col h-[calc(100vh-60px)] z-[999] bg-[#f5f5f5] border-r border-t w-[75%]  top-[60px]  transition-all space-y-6 px-5 pt-10 md:hidden text-center`}
      >
        <Link onClick={()=> setIsOpen(!isOpen)} className="text-xl font-bold" to={`/`}>
          Home
        </Link>
        <Link onClick={()=> setIsOpen(!isOpen)} className="text-xl font-bold" to={`/about`}>
          About
        </Link>
        <Link onClick={()=> setIsOpen(!isOpen)} className="text-xl font-bold" to={`/contact`}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
