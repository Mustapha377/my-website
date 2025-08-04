import React, { useEffect, useState , useRef} from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Home, User, Folder, Mail } from "lucide-react";

const navLinks = [
  { name: "Home", to: "home", icon: <Home size={18} /> },
  { name: "About", to: "about", icon: <User size={18} /> },
  { name: "Project", to: "project", icon: <Folder size={18} /> },
  { name: "Contact", to: "contact", icon: <Mail size={18} /> },
];

const Nav = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const buttonRef = useRef();

  const ToggleMenu = () => setIsOpen(!isOpen);
  const closeNav = () => setIsOpen(false);

  const handleSetActive = (to) => {
    setActiveLink(to);
    closeNav();
  };

  // close menu when clicking outside 
  useEffect(() => {
    const handleClickOutside = (event) =>
    {
      if (isOpen && menuRef.current && !
        menuRef.current.contains(event.target)
        && 
        ! 
        buttonRef.current.contains(event.target)
      ){
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.12,
        ease: "circOut",
      },
    }),
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  })

  return (
    <header className="fixed w-full z-10 top-0 left-0 bg-neutral-900 text-white">
      <div className="flex flex-row items-center justify-between px-4 py-3 md:px-8">
        <div className="text-[18px] font-bold font-poppins">
          <span className="text-[20px] text-amber-300">Mr.</span>Ameer</div>
        <button
          ref={buttonRef}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 
          focus:outline-none"
          onClick={ToggleMenu}
          aria-label="Toggle navigation"
        >
          <span
            className={`block h-1 w-6 bg-yellow-400 transition-transform 
              duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-6 bg-yellow-400 my-1 transition-opacity 
              duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-6 bg-yellow-400 transition-transform
               duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex flex-row space-x-8">
            {navLinks.map((item) => (
              <li
                key={item.to}
                className={`cursor-pointer ${
                  activeLink === item.to
                    ? "font-bold text-amber-400"
                    : "text-white"
                } hover:text-amber-300 transition-colors duration-200`}
              >
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  onSetActive={() => handleSetActive(item.to)}
                  onClick={() => handleSetActive(item.to)}
                  className="text-base hover:scale-90 transition-all"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav 
        ref={menuRef}
        className="md:hidden absolute top-16 right-4 w-64 rounded-xl 
         bg-neutral-900/80 backdrop-blur-md shadow-xl z-50">
          <ul className="flex flex-col items-center  h-full gap-4">
            {navLinks.map((item, i) => (
              <motion.li
                key={item.to}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                className={`text-xl  font-medium transition-all ${
                  activeLink === item.to ? "text-amber-400 font-bold" : "text-white"
                }`}
              >
               
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  onSetActive={() => handleSetActive(item.to)}
                  onClick={() => handleSetActive(item.to)}
                  className="flex items-center gap-3 w-full px-4 py-2
                   hover:text-amber-300"
                >
                   {item.icon}
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Nav;
