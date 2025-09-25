import { useState } from 'react';
import { projects } from '../projectData';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  SquareCheckBig,
  Rocket,
  ChevronRight,
  ArrowLeft,
  Github,
} from 'lucide-react';
import Footer from './footer';
import ScrollToTop from './ScrollToTop';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p?.id?.toString() === id);
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => setRedirect(true);

  if (!project) return <div className="text-white p-6">Project not found.</div>;
  if (redirect) return <Navigate to={`project/${project.id}`} replace />;

  return (
    <div className="min-h-screen bg-neutral-900 px-4 sm:px-6 lg:px-8 relative
     overflow-hidden">
      <ScrollToTop />

      {/* Back Button and Breadcrumb */}
      <div className="max-w-7xl mx-auto pt-6">
        <div className="flex items-center space-x-3 mb-8 animate-fadeIn">
          <button
            onClick={() =>
              navigate('/', {
                state: { scrollTo: 'project' },
              })
            }
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-yellow-400 bg-white/5 text-white hover:bg-white/10 transition duration-300"
          >
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span>Back</span>
          </button>
          <div className="flex items-center gap-2 text-sm text-white/50">
            <span>Project</span>
            <ChevronRight size={16} />
            <span className="truncate max-w-xs">{project.title}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
        {/* Left Column */}
        <motion.div
          className="space-y-8"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            {project.title}
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed">{project.about}</p>

          <div className="flex flex-wrap gap-3">
            <a
              href={project.live || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm underline underline-offset-2"
            >
              Live Demo
            </a>
            <a href={project.github || '#'} target="_blank" rel="noopener noreferrer">
              <button className="group flex items-center gap-2 bg-neutral-800 text-white px-4 py-2 rounded-xl hover:bg-neutral-950 hover:scale-105 transition">
                <Github className="group-hover:animate-shake" />
                GitHub
              </button>
            </a>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-3">Skills Used</h3>
            <ul className="flex flex-wrap gap-3">
              {project.tags.map((tag, index) => (
                <li key={index} className="text-yellow-400 bg-white/5 px-3 py-1 rounded-lg text-sm">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="space-y-8"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <img 
            loading='lazy'
            src={project.image} alt={project.title} 
            className="w-full h-auto object-cover" />
          </div>

          <div className="bg-white/[0.03] backdrop-blur-xl rounded-xl p-6">
            <h3 className="text-white text-2xl font-semibold flex items-center mb-6">
              Key Features <Rocket className="ml-3 text-yellow-400" />
            </h3>
            <ul className="space-y-4">
              {project.Features.map((feature, index) => (
                <li key={index} className="flex items-start text-white gap-3">
                  <SquareCheckBig className="text-yellow-400 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      <Footer textColor="text-white" />

    </div>
  );
};

export default ProjectDetails;
