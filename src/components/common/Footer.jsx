import img from "../../images/companylogo.webp";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="bg-[#0b033a] text-white py-10 px-6 md:px-20">
      <div className="grid md:grid-cols-4 gap-10">
      
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img src={img} alt="Company Logo" className="w-40" />
          </div>
          <p className="text-gray-300 text-sm">
            We offer a range of cutting-edge web development and software solutions tailored
            to meet client needs. Our experienced team delivers collaboratively and efficiently.
           <div className="flex gap-2 mt-4">
             <FaFacebook  className="text-3xl text-white bg-blue"/>
            <FaTwitterSquare  className="text-3xl text-white bg-blue" />
            <FaInstagramSquare className="text-3xl text-white bg-blue" />
             <FaLinkedin  className="text-3xl text-white bg-blue"  />
           </div>

          </p>
        </div>

        
        <div>
          <h3 className="text-lg font-bold mb-3 relative inline-block group">
            Services
            <span className="absolute left-0 bottom-0 w-full bg-blue-500 transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
          </h3>
          <ul className="text-gray-300 space-y-1">
            <li className="hover:underline cursor-pointer transition duration-300 ease-in-out">Business Intelligence</li>
            <li className="hover:underline cursor-pointer transition duration-300 ease-in-out">Virtual Workstation</li>
            <li className="hover:underline cursor-pointer transition duration-300 ease-in-out">Network Services</li>
            <li className="hover:underline cursor-pointer transition duration-300 ease-in-out">Data Science</li>
            <li className="hover:underline cursor-pointer transition duration-300 ease-in-out">IT Strategy</li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-lg font-bold mb-3 relative inline-block group">
            Company
            <span className="absolute left-0 bottom-0 w-full  bg-blue-500 transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
          </h3>
          <ul className="text-gray-300 space-y-1">
            <li className="hover:underline cursor-pointer transition duration-300 ease-in-out">About Us</li>
            <li className="hover:underline cursor-pointer transition duration-300 ease-in-out">Latest Projects</li>
            <li className="hover:underline cursor-pointer transition duration-300 ease-in-out">IT Solutions</li>
            <li className="hover:underline cursor-pointer transition duration-300 ease-in-out">Team Member</li>
            <li className="hover:underline cursor-pointer transition duration-300 ease-in-out">Contact Us</li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-lg font-bold mb-3">Contact Info</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center">
              <FaPhoneSquareAlt className="text-2xl" />

              <span>+44 7470 103120</span>
            </li>
            <li className="flex items-center">
              <MdEmail  className="text-2xl" />

              <span>info@codesthinker.com</span>
            </li>
            <li className="flex items-start">
              <FaLocationDot  className="text-3xl " />

              <span>
                Bartle House 9 Oxford Court, Manchester M23WQ United Kingdom<br />
                (Regional Office)
              </span>
            </li>
            <li className="flex items-start">
              <FaLocationDot  className="text-2xl" />

              <span>
                Hassan Manzil Basement Goheer Town Bahawalpur<br />
                (Global Delivery Center)
              </span>
            </li>
          </ul>

          <div className="mt-5 flex">
            <input
              type="email"
              placeholder="Your Mail"
              className="flex px-4 py-2 rounded-l-md text-gray-800 focus:outline-none bg-amber-50 transition duration-300 ease-in-out focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-800 px-5 py-2 rounded-r-md hover:bg-blue-600 transition duration-300 ease-in-out">
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-400">
        © 2024 – All Rights Reserved – Code’s Thinker
      </div>
    </footer>
  );
};

export default Footer;
