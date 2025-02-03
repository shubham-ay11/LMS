


// import React, { useState, useEffect } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { FaBarsStaggered } from 'react-icons/fa6';
// import { IoMdClose } from 'react-icons/io';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userImage, setUserImage] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Check if the user is logged in
//     const token = localStorage.getItem('token');
//     const image = localStorage.getItem('userImage'); // Placeholder for user image storage

//     if (token) {
//       setIsLoggedIn(true);
//       setUserImage(image); // Set user image if available
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('userImage'); // Clear image if stored
//     alert('Logged out successfully');
//     navigate('/');
//     setIsLoggedIn(false);
//   };

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <div className="bg-primary text-white">
//       <div className="flex items-center font-[Cardo] justify-between p-4">
//         {/* Logo */}
        
//         <NavLink
//   to="/"
//   className="flex items-center space-x-4 sm:space-x-6 font-serif text-gray-900 hover:text-gray-700 transition duration-300"
// >
//   {/* Logo Section */}
//   <div className="h-8 w-8 sm:h-12 sm:w-12 rounded-full overflow-hidden border border-gray-300 shadow-md">
//     <img
//       src="/img/logo.png"
//       className="w-full h-full object-cover"
//       alt="Company Logo"
//       loading="lazy"
//     />
//   </div>

//   {/* Company Name */}
//   <div className="text-left">
//     <h1 className="text-xl sm:text-2xl text-white font-bold tracking-wide">Stock Upp</h1>
//     <p className="text-sm sm:text-base font-light text-gray-300">
//       Your Trusted Partner
//     </p>
//   </div>
// </NavLink>



//         {/* Toggle Button for Mobile and Medium Screens */}
//         <button
//           className="lg:hidden text-3xl focus:outline-none"
//           onClick={toggleMenu}
//           aria-label="Toggle menu"
//         >
//           {isOpen ? <IoMdClose className="text-white" /> : <FaBarsStaggered className="text-secondary" />}
//         </button>

//         {/* Navigation Links for Large Screens */}
//         <div className="hidden lg:flex flex-1 justify-center items-center space-x-6 font-[Cardo] max-w-[700px] border-secondary rounded-md">
//           {['/Courses', '/Live Masterclass', '/Blog', '/About Us'].map((path, index) => (
//             <NavLink
//               key={index}
//               to={path}
//               className={({ isActive }) =>
//                 `px-4 py-2 transition-all duration-300 ease-in-out rounded-md ${
//                   isActive ? 'text-secondary font-semibold' : 'hover:text-third'
//                 }`
//               }
//             >
//               {path.charAt(1).toUpperCase() + path.slice(2)}
//             </NavLink>
//           ))}
//         </div>

//         {/* Show User Image or Logout/Login Button */}
//         <div className="hidden lg:flex items-center mr-12">
//           {isLoggedIn ? (
//             <div className="flex items-center space-x-4">
//               {userImage && (
//                 <img
//                   src={userImage}
//                   alt="User"
//                   className="w-8 h-8 rounded-full border border-secondary"
//                 />
//               )}
//               <button
//                 onClick={handleLogout}
//                 className="border-[1px] border-secondary rounded-md px-6 py-2 transition-all duration-300 ease-in-out hover:bg-third hover:text-white hover:shadow-lg"
//               >
//                 Logout
//               </button>
//             </div>
//           ) : (
//             <NavLink
//               to="/login"
//               className="border-[1px] border-secondary rounded-md px-6 py-2 transition-all duration-300 ease-in-out hover:bg-third hover:text-white hover:shadow-lg"
//             >
//               Login
//             </NavLink>
//           )}
//         </div>
//       </div>

//       {/* Navigation Links for Small and Medium Screens */}
//       <div
//         className={`lg:hidden flex flex-col items-start mt-4 space-y-2 transition-all duration-300 ease-in-out ${
//           isOpen ? 'flex' : 'hidden'
//         }`}
//       >
//         {['/Courses', '/Live Masterclass', '/Virtual Trading', '/Blog', '/About Us'].map((path, index) => (
//           <NavLink
//             key={index}
//             to={path}
//             className={({ isActive }) =>
//               `block mb-3 px-4 py-2 ${
//                 isActive ? 'text-secondary font-semibold' : 'hover:text-secondary'
//               }`
//             }
//           >
//             {path.charAt(1).toUpperCase() + path.slice(2)}
//           </NavLink>
//         ))}
//         {isLoggedIn ? (
//           <button
//             onClick={handleLogout}
//             className="block text-left px-4 py-2 rounded-md text-red-600 hover:text-red-800"
//           >
//             Logout
//           </button>
//         ) : (
//           <NavLink
//             to="/login"
//             className="block pb-4 rounded-md px-4 py-2 text-center hover:text-secondary"
//           >
//             Login
//           </NavLink>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Navbar;





















import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userImage, setUserImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const image = localStorage.getItem("userImage");

    if (token) {
      setIsLoggedIn(true);
      setUserImage(image);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userImage");
    alert("Logged out successfully");
    navigate("/");
    setIsLoggedIn(false);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="bg-primary text-white">
      <div className="flex items-center font-[Cardo] justify-between p-4">
        {/* Logo */}
        <NavLink
          to="/home"
          className="flex items-center space-x-4 sm:space-x-6 font-serif text-gray-900 hover:text-gray-700 transition duration-300"
        >
          <div className="h-8 w-8 sm:h-12 sm:w-12 rounded-full overflow-hidden border border-gray-300 shadow-md">
            <img
              src="/logo.png"
              className="w-full h-full object-cover"
              alt="Company Logo"
              loading="lazy"
            />
          </div>
          <div className="text-left">
          <h1 className="text-xl sm:text-2xl text-white font-bold tracking-wide">
      STOCK UPP<span className="align-super text-sm font-normal">™</span>
    </h1>
          
          </div>
        </NavLink>

        {/* Toggle Button for Mobile */}
        <button
          className="lg:hidden text-3xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <IoMdClose className="text-white" />
          ) : (
            <FaBarsStaggered className="text-secondary" />
          )}
        </button>

        {/* Navigation Links (Desktop) */}
        <div className="hidden lg:flex flex-1 justify-center items-center space-x-6 font-[Cardo] max-w-[700px] border-secondary rounded-md">
          {["/home","/Courses", "/Blog", "/About us"].map((path, index) => (
            <NavLink
              key={index}
              to={path}
              className={({ isActive }) =>
                `px-4 py-2 transition-all duration-300 ease-in-out rounded-md ${
                  isActive ? "text-secondary font-semibold" : "hover:text-third"
                }`
              }
            >
              {path.charAt(1).toUpperCase() + path.slice(2)}
            </NavLink>
          ))}
        </div>

        {/* User Section */}
        <div className="hidden lg:flex items-center mr-12">
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              {userImage && (
                <img
                  src={userImage}
                  alt="User"
                  className="w-8 h-8 rounded-full border border-secondary"
                />
              )}
              <button
                onClick={handleLogout}
                className="border-[1px] border-secondary rounded-md px-6 py-2 transition-all duration-300 ease-in-out hover:bg-third hover:text-white hover:shadow-lg"
              >
                Logout
              </button>
            </div>
          ) : (
            <NavLink
              to="/login"
              className="border-[1px] border-secondary rounded-md px-6 py-2 transition-all duration-300 ease-in-out hover:bg-third hover:text-white hover:shadow-lg"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div
        className={`lg:hidden flex flex-col items-start mt-4 space-y-2 transition-all duration-300 ease-in-out ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        {[ "/home","/Courses", "/Blog", "/About us"].map((path, index) => (
          <NavLink
            key={index}
            to={path}
            className={({ isActive }) =>
              `block mb-3 px-4 py-2 ${
                isActive ? "text-secondary font-semibold" : "hover:text-secondary"
              }`
            }
            onClick={toggleMenu}
          >
            {path.charAt(1).toUpperCase() + path.slice(2)}
          </NavLink>
        ))}
        {isLoggedIn ? (
          <button
            onClick={() => {
              handleLogout();
              toggleMenu();
            }}
            className="block text-left px-4 py-2 rounded-md text-red-600 hover:text-red-800"
          >
            Logout
          </button>
        ) : (
          <NavLink
            to="/login"
            className="block pb-4 rounded-md px-4 py-2 text-center hover:text-secondary"
            onClick={toggleMenu}
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default Navbar;
