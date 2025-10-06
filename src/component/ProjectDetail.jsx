import { useState } from 'react';
import { projects, getStatusConfig } from '../projectData';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  SquareCheckBig,
  Rocket,
  ChevronRight,
  ArrowLeft,
  Github,
  ExternalLink,
  Calendar,
  Code,
  Construction,
  Clock,
} from 'lucide-react';
import Footer from './footer';
import ScrollToTop from './ScrollToTop';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p?.id?.toString() === id);
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();
  
  const statusConfig = project ? getStatusConfig(project.status) : null;

  const handleClick = () => setRedirect(true);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-800 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-white text-3xl font-bold mb-4">Project not found</h2>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-amber-500 text-neutral-900 rounded-lg font-semibold hover:bg-amber-600 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  if (redirect) return <Navigate to={`project/${project.id}`} replace />;

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <ScrollToTop />

      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Back Button and Breadcrumb */}
      <div className="max-w-7xl mx-auto pt-8 relative z-10">
        <div className="flex items-center space-x-3 mb-12 animate-fadeIn">
          <button
            onClick={() =>
              navigate('/', {
                state: { scrollTo: 'project' },
              })
            }
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-amber-400 bg-transparent text-amber-400 hover:bg-amber-400 hover:text-neutral-900 transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold">Back to Projects</span>
          </button>
          <div className="flex items-center gap-2 text-sm text-neutral-400">
            <span>Projects</span>
            <ChevronRight size={16} />
            <span className="truncate max-w-xs text-amber-400 font-medium">{project.title}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 pb-20 relative z-10">
        {/* Left Column */}
        <motion.div
          className="space-y-8"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Project Title */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {project.title}
              </h1>
              {/* Status Badge */}
              {project.status && statusConfig && (
                <span className={`px-4 py-2 rounded-full text-sm font-semibold border backdrop-blur-sm ${statusConfig.bgColor} ${statusConfig.textColor} ${statusConfig.borderColor} whitespace-nowrap`}>
                  {statusConfig.label}
                </span>
              )}
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600"></div>
          </div>

          {/* Project Description */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <p className="text-neutral-300 text-lg leading-relaxed">
              {project.about}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href={project.live || project.links?.web || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-amber-500 text-neutral-900 rounded-lg font-semibold hover:bg-amber-600 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/50"
            >
              <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              Live Demo
            </a>
            <a 
              href={project.github || project.links?.github || '#'} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button className="group flex items-center gap-2 px-6 py-3 bg-neutral-700 text-white rounded-lg font-semibold hover:bg-neutral-600 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                View Code
              </button>
            </a>
          </div>

          {/* Skills/Technologies Used */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
              <Code className="w-6 h-6 text-amber-400" />
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-neutral-700 text-amber-400 rounded-lg text-sm font-medium border border-amber-400/20 hover:bg-amber-400 hover:text-neutral-900 transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="space-y-8"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Project Image */}
          <div className="group relative overflow-hidden rounded-2xl border-2 border-neutral-700 shadow-2xl hover:shadow-amber-500/20 transition-shadow duration-500">
            <img
              loading="lazy"
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Under Construction Overlay for In-Progress */}
            {project.status === 'in-progress' && (
              <div className="absolute inset-0 flex items-center justify-center bg-neutral-900/70 backdrop-blur-sm">
                <div className="text-center space-y-4 px-6">
                  <Construction className="w-16 h-16 text-amber-400 mx-auto animate-bounce" />
                  <div className="space-y-2">
                    <p className="text-white font-bold text-2xl drop-shadow-lg">Under Construction</p>
                    <p className="text-neutral-200 text-base drop-shadow-md">This project is currently being developed</p>
                  </div>
                </div>
              </div>
            )}

            {/* Coming Soon Overlay for Planning */}
            {project.status === 'planning' && (
              <div className="absolute inset-0 flex items-center justify-center bg-neutral-900/70 backdrop-blur-sm">
                <div className="text-center space-y-4 px-6">
                  <Clock className="w-16 h-16 text-purple-400 mx-auto animate-pulse" />
                  <div className="space-y-2">
                    <p className="text-white font-bold text-2xl drop-shadow-lg">Coming Soon</p>
                    <p className="text-neutral-200 text-base drop-shadow-md">This project is in the planning phase</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Key Features */}
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-xl">
            <h3 className="text-white text-2xl font-bold flex items-center gap-3 mb-6">
              <div className="p-2 bg-amber-500/20 rounded-lg">
                <Rocket className="w-6 h-6 text-amber-400" />
              </div>
              Key Features
            </h3>
            <ul className="space-y-4">
              {project.Features?.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 text-neutral-300 group/item"
                >
                  <div className="mt-1 p-1 bg-amber-500/20 rounded">
                    <SquareCheckBig className="w-5 h-5 text-amber-400 group-hover/item:scale-110 transition-transform" />
                  </div>
                  <span className="leading-relaxed">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Additional Info Card (if you have date or other metadata) */}
          {project.date && (
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 text-neutral-300">
                <Calendar className="w-5 h-5 text-amber-400" />
                <span className="font-medium">Completed:</span>
                <span>{project.date}</span>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      <Footer textColor="text-white" />
    </div>
  );
};

export default ProjectDetails;