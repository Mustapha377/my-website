import Todoimage from "../asset/img/TodoList.png"
import porfolioMockup from "../asset/img/porfolioMockup.png"
import DboxMockup from "../asset/img/DboxMockup.png"
import { v4 as uuidv4 } from "uuid"

const savedProjects =
 JSON.parse(localStorage.getItem("projects")) || [];

export const projects = [

      {
      id: uuidv4(),
      title: "Dbox",
      about: "A dynamic form builder with backend and frontend separation, built with Node.js, Express, Prisma, PostgreSQL, and React. Users can create, share, and collect data through custom forms without writing code — designed for African needs with offline support, local payment integration, and multi-language options..",
      tags: ["React", "JavaScript", "tailwindcss", "CSS"],
      links: { web: "#", github: "https://github.com/Mustapha377/Dbox-form-builder-.git" },
      image: DboxMockup,
      status: "in-progress",
      Features: [
        "User Dashboard",
        "Payment Setup",
        "Analytics",
        "Shareable Links",
        "Email Notifications",
        "Modern UI",
        "Responsive Design"
      ]
    },

    {
      id: uuidv4(),
      title: "personal-Website",
      about: "This project is part of my personal portfolio website, designed to highlight my technical skills and design approach. It's built using React, styled with Tailwind CSS, and animated using Framer Motion. The goal was to create a fast, responsive, and visually engaging platform where I can present my development work, share ideas, and connect with potential collaborators or clients",
      tags: ["React", "JavaScript", "tailwindcss", "CSS"],
      links: { web: "https://mustapha377.github.io/my-website/", github: "https://github.com/Mustapha377/my-website.git" },
      image: porfolioMockup,
      status: "completed", // "completed", "in-progress", or "planning"
      Features: [
        "Responsive Design", 
        "Smooth scroll-triggered animations", 
        "Lazy-loaded images and components for performance",
        "Mobile-first responsive design", 
        "Clean, minimalist UI"
      ]
    },
    {
      id: uuidv4(),
      title: "Todo-List",
      about: "A simple and responsive Todo List web app that allows users to create, read, update, and delete tasks. Built to demonstrate CRUD operations, local storage, and UI/UX skills.",
      tags: ["React", "JavaScript", "tailwindcss", "CSS"],
      links: { web: "https://mustapha377.github.io/Todo-list-page/", github: "https://github.com/Mustapha377/Todo-list-page.git" },
      image: Todoimage,
      status: "completed",
      Features: [
         "Add new todo",
        "Edit existing todo",
        "Mark task as completed",
        "Delete task",
        "View all, completed, or pending tasks"
      ]
    },
    
];

savedProjects.push(projects);
localStorage.setItem("projects", JSON.stringify(projects));

// Helper function to get status badge details
export const getStatusConfig = (status) => {
  const configs = {
    'completed': {
      label: 'Completed',
      bgColor: 'bg-green-500/20',
      textColor: 'text-green-400',
      borderColor: 'border-green-400/30'
    },
    'in-progress': {
      label: 'In Progress',
      bgColor: 'bg-blue-500/20',
      textColor: 'text-blue-400',
      borderColor: 'border-blue-400/30'
    },
    'planning': {
      label: 'Planning',
      bgColor: 'bg-purple-500/20',
      textColor: 'text-purple-400',
      borderColor: 'border-purple-400/30'
    }
  };
  
  return configs[status] || configs['completed'];
};