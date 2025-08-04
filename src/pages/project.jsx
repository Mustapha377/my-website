import React from "react";
import Box from "../component/projectBox";
import { Element } from "react-scroll";
import Divider from "../component/divider";
import { projects } from "../projectData";
import AnimatedSection from "../component/SlideUpAnimation";
import { useEffect, useState } from "react";

function Project() {
  const [showAll, setShowAll] = useState(false); // ✅ Control the state here
  useEffect(() => {
    const scrollY = sessionStorage.getItem("scrolly");
    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY));
      sessionStorage.removeItem("scrolly"); // clear the scroll position affter using it
    }
  }, [])

  return (
    <Element name="project">
      <section  id="project"
       className="bg-neutral-700">
        <div className="flex flex-col items-center justify-center m-6 
        md:pb-20 lg:pb-20 mb-10">
          <h2 className="text-neutral-200 text-4xl mb-8 py-10 md:text-3xl
            lg:text-4xl font-bold
            sm:mb-2">
            Project
          </h2>

          {/* ✅ Pass showAll to Box */}
          <Box  projects={projects} showAll={showAll} />

          {/* ✅ Toggle Button */}
          {projects.length > 3 && (
            <button
              onClick={() => setShowAll(prev => !prev)}
              className="my-5 
               font-semibold px-6 py-3 rounded-md text-sm shadow-md border-amber-300
               cursor-pointer bg-neutral-700 text-white border-2
               hover:bg-neutral-950 hover:scale-105 transition-all"
            >
              {showAll ? "View Less Projects" : "View All Projects"}
            </button>
          )}
        </div>
      </section>
    </Element>
  );
}

export default Project;
