import React from "react";
import Box from "../component/projectBox";
import { Element } from "react-scroll";
import { projects } from "../projectData";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function Project() {
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const scrollY = sessionStorage.getItem("scrolly");
    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY));
      sessionStorage.removeItem("scrolly");
    }
  }, []);

  return (
    <Element name="project">
      <section 
        id="project"
        className="relative py-20 px-6 md:px-12 bg-gradient-to-b from-neutral-800 to-neutral-900"
      >
        <div className="flex flex-col items-center justify-center">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6"></div>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              Explore my latest work and see how I bring ideas to life through code
            </p>
          </div>

          {/* Pass showAll to Box */}
          <Box projects={projects} showAll={showAll} />

          {/* Toggle Button */}
          {projects.length > 3 && (
            <button
              onClick={() => setShowAll(prev => !prev)}
              className="group mt-8 relative px-8 py-4 bg-transparent border-2 border-amber-400 text-amber-400 rounded-lg font-semibold text-lg overflow-hidden transition-all duration-300 hover:bg-amber-400 hover:text-neutral-900 hover:scale-105 hover:shadow-xl hover:shadow-amber-400/30"
            >
              <span className="flex items-center gap-2">
                {showAll ? (
                  <>
                    View Less Projects
                    <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                  </>
                ) : (
                  <>
                    View All Projects
                    <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                  </>
                )}
              </span>
            </button>
          )}
        </div>

        {/* Decorative background elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl pointer-events-none"></div>
      </section>
    </Element>
  );
}

export default Project;