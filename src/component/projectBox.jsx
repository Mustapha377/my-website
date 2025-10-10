import React, { useState } from 'react';
import SlideUpAnimation from './SlideUpAnimation.jsx';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ExternalLink, Construction, Clock } from 'lucide-react';
import { getStatusConfig } from '../projectData';

const Box = ({ projects, showAll }) => {
  const navigate = useNavigate();
  const [hoveredProject, setHoveredProject] = useState(null);

  // limit to 3 projects initially
  const VisibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div className="space-y-10">
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {VisibleProjects.map((project) => {
          const statusConfig = getStatusConfig(project.status);
          
          return (
            <SlideUpAnimation key={project.id}>
              <div 
                className="group relative w-full rounded-2xl border-2 border-neutral-700 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full bg-neutral-800 overflow-hidden"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Image Section */}
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <img
                    loading='lazy'
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/600x400?text=Image+Not+Found';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  
                  {/* Status Badge */}
                  {project.status && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className={`px-3 py-1.5 rounded-full text-xs font-semibold border backdrop-blur-sm ${statusConfig.bgColor} ${statusConfig.textColor} ${statusConfig.borderColor}`}>
                        {statusConfig.label}
                      </span>
                    </div>
                  )}

                  {/* Under Construction Overlay for In-Progress */}
                  {project.status === 'in-progress' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-neutral-900/60 backdrop-blur-[2px] z-[5]">
                      <div className="text-center space-y-3 px-4">
                        <Construction className="w-12 h-12 text-amber-400 mx-auto animate-bounce" />
                        <div className="space-y-1">
                          <p className="text-white font-bold text-lg drop-shadow-lg">Under Construction</p>
                          <p className="text-neutral-200 text-sm drop-shadow-md">This project is currently being developed</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Coming Soon Overlay for Planning */}
                  {project.status === 'planning' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-neutral-900/60 backdrop-blur-[2px] z-[5]">
                      <div className="text-center space-y-3 px-4">
                        <Clock className="w-12 h-12 text-purple-400 mx-auto animate-pulse" />
                        <div className="space-y-1">
                          <p className="text-white font-bold text-lg drop-shadow-lg">Coming Soon</p>
                          <p className="text-neutral-200 text-sm drop-shadow-md">This project is in the planning phase</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Text Content */}
                <div className="p-6 space-y-4">
                  <h2 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h2>
                  
                  <p className="text-sm text-neutral-400 leading-relaxed line-clamp-3">
                    {project.about}
                  </p>

                  {/* Tags (if available) */}
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-neutral-700 text-amber-400 text-xs font-medium rounded-full border border-amber-400/20 hover:bg-amber-400 hover:text-neutral-900 transition-colors cursor-default"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Buttons */}
                  <div className="flex items-center gap-3 pt-2">
                    {/* Live Demo Link */}
                    <a
                      href={project.links.web || project.links?.web || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm font-semibold hover:underline transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      Live Demo
                    </a>

                    {/* Details Button - FIXED NAVIGATION PATH */}
                    <button
                      onClick={() => {
                        sessionStorage.setItem("scrolly", window.scrollY);
                        navigate(`/project/${project.id}`);
                      }}
                      type='button'
                      className="group/btn ml-auto text-sm px-5 py-2.5 rounded-lg flex items-center gap-2 cursor-pointer bg-amber-500 text-neutral-900 font-semibold hover:bg-amber-600 hover:scale-105 transition-all shadow-lg hover:shadow-amber-500/50 focus:outline-none focus:ring-2 focus:ring-amber-400"
                    >
                      Details
                      <ArrowRight className='w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1' />
                    </button>
                  </div>
                </div>

                {/* Border glow effect on hover */}
                <div className="absolute inset-0 border-2 border-amber-400/0 group-hover:border-amber-400/50 rounded-2xl pointer-events-none transition-all duration-500"></div>
              </div>
            </SlideUpAnimation>
          );
        })}
      </div>
    </div>
  );
};

export default Box;