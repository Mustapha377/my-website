import React from 'react';
import SlideUpAnimation from './SlideUpAnimation.jsx';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Box = ({ projects, showAll }) => {
  const navigate = useNavigate();

  // limit to 3 projects initially
  const VisibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div  className="space-y-10">
      <div className="p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 
      2xl:grid-cols-3 gap-5">
        {VisibleProjects.map((project, index) => (
          <SlideUpAnimation key={index}>
            <div className="w-full rounded-3xl border-2 border-gray-600 mb-[20px]
            shadow-lg hover:scale-105 transition-transform duration-300 h-full
             bg-neutral-900">
              {/* ✅ Image Section */}
              <div className="w-full aspect-[4/3] md:aspect-[3/2]
               lg:aspect-[16/9] overflow-hidden rounded-t-3xl">
                <img
                  loading='lazy'
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src =
                      'https://via.placeholder.com/600x400?text=Image+Not+Found';
                  }}
                />
              </div>

              {/* ✅ Text Content */}
              <div className="p-4 space-y-3">
                <h2 className="text-xl font-semibold text-white">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-300 opacity-80 line-clamp-2">
                  {project.about}
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href={project.links.web}
                    className="text-blue-400 hover:text-blue-300 text-sm 
                    hover:underline"
                  >
                    Live Demo
                  </a>
                  <button
                    onClick={() => {
                       sessionStorage.setItem("scrolly", window.scrollY);
                       navigate(`project/${project.id}`);}}
                    type='button'
                    className="group text-sm px-4 py-2 rounded-full flex 
                    cursor-pointer bg-neutral-700 text-white
                   hover:bg-neutral-950 hover:scale-105 transition-all
                   focus:outline-none focus:ring-neutral-700"
                  >
                    Details
                    <ArrowRight className='transition-transform duration-300 
                     group-hover:-translate-x-1 text-amber-300' />
                  </button>
                </div>
              </div>
            </div>
          </SlideUpAnimation>
        ))}
      </div>
    </div>
  );
};

export default Box;
