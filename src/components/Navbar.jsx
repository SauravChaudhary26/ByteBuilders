// import React, { useState } from "react";
// import { Link } from "react-scroll";
// import Button from "../layouts/Button";
// import { AiOutlineClose, AiOutlineMenu, AiOutlineDown } from "react-icons/ai";
// import Contact from "../models/Contact";



// const Navbar = () => {
//   const [menu, setMenu] = useState(false);
//   const [showForm, setShowForm] = useState(false);
//   const [showAppointmentsDropdown, setShowAppointmentsDropdown] = useState(false);
//   const [showTestsDropdown, setShowTestsDropdown] = useState(false);

//   const handleChange = () => {
//     setMenu(!menu);
//   };

//   const closeMenu = () => {
//     setMenu(false);
//   };

//   const openForm = () => {
//     setShowForm(true);
//     setMenu(false);
//   };

//   const closeForm = () => {
//     setShowForm(false);
//   };

//   return (
//     <div className="fixed w-full z-10 text-white">
//       <div>
//         <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-backgroundColor shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
//           <div className="flex flex-row items-center cursor-pointer">
//             <Link to="home" spy={true} smooth={true} duration={500}>
//               <h1 className="text-2xl font-semibold">Doctor Landing Page.</h1>
//             </Link>
//           </div>

//           <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8">
//             <Link
//               to="home"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className="hover:text-hoverColor transition-all cursor-pointer"
//             >
//               Home
//             </Link>
            
            
//             <Link
//               to="services"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className="hover:text-hoverColor transition-all cursor-pointer"
//             >
//               Services
//             </Link>
//             <Link
//               to="doctors"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className="hover:text-hoverColor transition-all cursor-pointer"
//             >
//               Doctors
//             </Link>
            

//             {/* Appointments Dropdown */}
//             <div className="relative">
//               <button
//                 onClick={() => setShowAppointmentsDropdown(!showAppointmentsDropdown)}
//                 className="flex items-center hover:text-hoverColor transition-all cursor-pointer"
//               >
//                 Appointments <AiOutlineDown className="ml-1" />
//               </button>
//               {showAppointmentsDropdown && (
//                 <div className="absolute top-full left-0 bg-backgroundColor text-white p-2 w-40">
//                   <Link to="pending-appointments" spy={true} smooth={true} duration={500} className="block hover:text-hoverColor transition-all cursor-pointer">Pending Appointments</Link>
//                   <Link to="ongoing-appointments" spy={true} smooth={true} duration={500} className="block hover:text-hoverColor transition-all cursor-pointer">Ongoing Appointments</Link>
//                   <Link to="post-appointments" spy={true} smooth={true} duration={500} className="block hover:text-hoverColor transition-all cursor-pointer">Post Appointments</Link>
//                 </div>
//               )}
//             </div>

//             {/* Tests Dropdown */}
//             <div className="relative">
//               <button
//                 onClick={() => setShowTestsDropdown(!showTestsDropdown)}
//                 className="flex items-center hover:text-hoverColor transition-all cursor-pointer"
//               >
//                 Tests <AiOutlineDown className="ml-1" />
//               </button>
//               {showTestsDropdown && (
//                 <div className="absolute top-full left-0 bg-backgroundColor text-white p-2 w-40">
//                   <Link to="view-results" spy={true} smooth={true} duration={500} className="block hover:text-hoverColor transition-all cursor-pointer">View Results</Link>
                  
//                 </div>
//               )}
//             </div>
//           </nav>

//           <div className="hidden lg:flex">
//             <button
//               className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
//               onClick={openForm}
//             >
//               Contact Us
//             </button>
//           </div>

//           {showForm && <Contact closeForm={closeForm} />}

//           <div className="lg:hidden flex items-center">
//             {menu ? (
//               <AiOutlineClose size={28} onClick={handleChange} />
//             ) : (
//               <AiOutlineMenu size={28} onClick={handleChange} />
//             )}
//           </div>
//         </div>
//         <div
//           className={`${
//             menu ? "translate-x-0" : "-translate-x-full"
//           } lg:hidden flex flex-col absolute bg-backgroundColor text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
//         >
//           <Link
//             to="home"
//             spy={true}
//             smooth={true}
//             duration={500}
//             className="hover:text-hoverColor transition-all cursor-pointer"
//             onClick={closeMenu}
//           >
//             Home
//           </Link>
         
//           <Link
//             to="services"
//             spy={true}
//             smooth={true}
//             duration={500}
//             className="hover:text-hoverColor transition-all cursor-pointer"
//             onClick={closeMenu}
//           >
//             Services
//           </Link>
          
          

//           <div className="lg:hidden">
//             <button
//               className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
//               onClick={openForm}
//             >
//               Contact Us
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu, AiOutlineDown } from "react-icons/ai";
import Contact from "../models/Contact";
import HamburgerMenu from "../components/HamburgerMenu";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showAppointmentsDropdown, setShowAppointmentsDropdown] = useState(false);
  const [showTestsDropdown, setShowTestsDropdown] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className="fixed w-full z-10 text-white">
      <div>
        <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-backgroundColor shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className="flex flex-row items-center cursor-pointer">
            <Link to="home" spy={true} smooth={true} duration={500}>
              <h1 className="text-2xl font-semibold">Doctor Landing Page.</h1>
            </Link>
          </div>

          <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="doctors"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Doctors
            </Link>

            {/* Appointments Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowAppointmentsDropdown(!showAppointmentsDropdown)}
                className="flex items-center hover:text-hoverColor transition-all cursor-pointer"
              >
                Appointments <AiOutlineDown className="ml-1" />
              </button>
              {showAppointmentsDropdown && (
                <div className="absolute top-full left-0 bg-backgroundColor text-white p-2 w-40">
                  <Link to="pending-appointments" spy={true} smooth={true} duration={500} className="block hover:text-hoverColor transition-all cursor-pointer">Pending Appointments</Link>
                  <Link to="ongoing-appointments" spy={true} smooth={true} duration={500} className="block hover:text-hoverColor transition-all cursor-pointer">Ongoing Appointments</Link>
                  <Link to="post-appointments" spy={true} smooth={true} duration={500} className="block hover:text-hoverColor transition-all cursor-pointer">Post Appointments</Link>
                </div>
              )}
            </div>

            {/* Tests Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowTestsDropdown(!showTestsDropdown)}
                className="flex items-center hover:text-hoverColor transition-all cursor-pointer"
              >
                Tests <AiOutlineDown className="ml-1" />
              </button>
              {showTestsDropdown && (
                <div className="absolute top-full left-0 bg-backgroundColor text-white p-2 w-40">
                  <Link to="view-results" spy={true} smooth={true} duration={500} className="block hover:text-hoverColor transition-all cursor-pointer">View Results</Link>
                </div>
              )}
            </div>
          </nav>

          <div className="hidden lg:flex">
            <button
              className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
              onClick={openForm}
            >
              Contact Us
            </button>
          </div>

          {showForm && <Contact closeForm={closeForm} />}

          {/* Hamburger Menu */}
          <HamburgerMenu />

          <div className="lg:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <AiOutlineMenu size={28} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-backgroundColor text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Services
          </Link>

          <div className="lg:hidden">
            <button
              className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
              onClick={openForm}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

