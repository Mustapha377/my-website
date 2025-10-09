import React from "react";
import { Element, Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";
import Logo from "../component/logo";
import AnimatedHeading from "../component/HeadingAnimate";
import { Folders, Send, ArrowDown } from "lucide-react";

function Home() {
  return (
    <Element name="home">
      <section 
        id="home" 
        className="relative min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-700 overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-300/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative flex flex-col justify-center min-h-screen max-w-7xl mx-auto px-6 md:px-12 py-12">
          {/* Main content */}
          <div className="space-y-8">
            {/* Greeting */}
            <div className="space-y-2 animate-slideDown">
              <p className="text-amber-300 text-lg md:text-xl font-medium tracking-wide flex items-center gap-2">
                <AnimatedHeading text="👋 Hello World" />
              </p>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-slideUp">
                I'm a
                <span className="block mt-2 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                  Full-Stack
                </span>
                <span className="block bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
                  Web Developer
                </span>
              </h1>
            </div>

            {/* Typewriter section */}
            <div className="h-24 md:h-20 animate-fadeIn" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
              <p className="text-xl md:text-2xl lg:text-3xl text-neutral-300 font-light">
                <Typewriter
                  words={["I design and build websites for your dreams ✨"]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 animate-fadeIn" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
              <Link to="contact" smooth={true} duration={500}>
                <button className="group relative px-8 py-4 bg-amber-400 text-neutral-900 rounded-lg font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-400/50">
                  <span className="relative z-10 flex items-center gap-2">
                    Contact Me
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </button>
              </Link>

              <Link to="project" smooth={true} duration={500}>
                <button className="group px-8 py-4 bg-transparent border-2 border-amber-400 text-amber-400 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-amber-400 hover:text-neutral-900 hover:scale-105">
                  <span className="flex items-center gap-2">
                    View Projects
                    <Folders className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </span>
                </button>
              </Link>
            </div>
          </div>

          {/* Logo component */}
          <div className="mt-12">
            <Logo />
          </div>

          {/* Scroll indicator */}
          <Link to="about" smooth={true} duration={500}>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce">
              <ArrowDown className="w-6 h-6 text-amber-300" />
            </div>
          </Link>
        </div>
      </section>
    </Element>
  );
}

export default Home;