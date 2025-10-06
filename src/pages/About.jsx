import React from "react";
import { Element } from "react-scroll";
import icons from "../component/Icons";
import { SVG } from "../SVGdata";
import FadeRightAnimate from "../component/FadeRightAnimate";

function About() {
  return (
    <Element name="about">
      <section 
        id="about" 
        className="relative py-20 px-6 md:px-12 bg-gradient-to-b from-neutral-100 to-white"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8"></div>
          </div>

          {/* Bio Section */}
          <div className="max-w-4xl mx-auto mb-20 animate-slideUp">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-neutral-200 hover:shadow-2xl transition-shadow duration-300">
              <p className="text-lg md:text-xl text-neutral-700 leading-relaxed">
                I'm <span className="font-bold text-amber-600">Mustapha Ado</span>, a self-taught and highly motivated full-stack web developer. 
                Everything I've learned—whether it's frontend design, backend development, or creating digital products—has been through 
                personal dedication and hands-on experience. I'm a fast learner who thrives on challenges, constantly exploring new 
                technologies to grow my skills and build practical, real-world solutions.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-20">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-neutral-900">
              Technical Skills
            </h3>
            <div className="relative overflow-hidden bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 rounded-2xl py-12 shadow-xl">
              <div className="flex animate-scroll hover:[animation-play-state:paused]">
                {[...Array(4)].flatMap((_, i) =>
                  icons.map((item, index) => (
                    <div
                      key={`${item.name}-${i}-${index}`}
                      className="flex flex-col items-center justify-center min-w-[120px] md:min-w-[160px] px-6 flex-shrink-0"
                    >
                      <div className="text-4xl md:text-5xl mb-3 transform hover:scale-125 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <span className="text-white font-semibold text-xs md:text-sm whitespace-nowrap">
                        {item.name}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <div className="text-center mb-12">
              <div className="inline-block bg-neutral-900 text-white px-8 py-4 rounded-full shadow-lg">
                <h3 className="text-2xl md:text-3xl font-bold">What I Can Offer</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {SVG.map((item, index) => (
                <FadeRightAnimate key={item.id || index}>
                  <div
                    className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-neutral-200 h-full"
                  >
                    {/* Icon */}
                    <div className="mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                      <img 
                        className="w-16 h-16 mx-auto" 
                        src={item.source} 
                        alt={item.heading} 
                      />
                    </div>

                    {/* Heading */}
                    <h4 className="text-xl font-bold text-neutral-900 mb-4 text-center">
                      {item.heading}
                    </h4>

                    {/* Content */}
                    <p className="text-neutral-600 text-sm mb-6 leading-relaxed text-center">
                      {item.Content}
                    </p>

                    {/* List */}
                    <ul className="space-y-2">
                      {item.list.map((tech, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <span className="text-amber-500 mr-2 mt-1 text-xl">•</span>
                          <span className="text-neutral-700 font-medium">{tech}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Hover effect border */}
                    <div className="absolute inset-0 border-2 border-amber-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </FadeRightAnimate>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default About;