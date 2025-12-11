import { Link } from 'react-router-dom';
import logo from '../../images/companylogo.webp'
import { useProfile } from '../../context/UserName';

const Navbar = () => {
  const { name } = useProfile()
  return (
    <nav className='w-[100] h-20 bg-[#060145]  flex items-center gap-[70px] justify-center'>
      <div className="relative w-72 overflow-hidden group">

        <img
          src={logo}
          alt="Logo"
          className="absolute h-16 w-36 left-0 top-1/2 -translate-y-1/2 
               opacity-0 translate-x-[-50%]
               transition-all duration-700 ease-in-out 
               group-hover:opacity-100 group-hover:translate-x-0"/>
        <div className="flex flex-col items-center mr-60 justify-center 
                  transition-all duration-500 ease-in-out 
                  group-hover:opacity-0">
          <h1 className="text-white text-4xl md:text-[4rem] leading-none">C</h1>
          <div className="relative  md:ml-[0.9rem] font-semibold mr-3  -mt-7 sm:-mt-9">
            <h2 className="text-[#F69B23] mt-[7px] sm:mt-0 text-xl sm:text-4xl ">T</h2>
          </div>
        </div>
      </div>

      <ul className='flex gap-20 text-white font-bold'>
        <li><Link to="/" className='' >Home</Link></li>
        <li><a href="/about"> About</a></li>
        <li><a href="/services"> Services</a></li>
        <li><a href=""> Team </a></li>
        <li><a href=""> Contact us </a></li>
      </ul>
      {/* {condition ? "":""} */}
      {/* {condition ? <>:<>} */}
      {
        name ? <div className='text-white text-2xl'>{name}</div> :
          <Link to="/login" >
            <button onClick={() => setpage("login")} className="rounded-2xl bg-blue-600  px-4 py-2 text-white font-semibold hover:opacity-50 transition-all">
              Login
            </button>

          </Link>
      }
    </nav>
  )
}

export default Navbar;


