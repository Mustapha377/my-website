import webImage from "../asset/img/921shots_so.png"
import Todoimage from "../asset/img/TodoList.png"
import porfolioMockup from "../asset/img/porfolioMockup.png"

export const projects = [
    {
      id: 1,
      title: "personal-Website",
      about: "This project is part of my personal portfolio website, designed to highlight my technical skills and design approach. It's built using React, styled with Tailwind CSS, and animated using Framer Motion. The goal was to create a fast, responsive, and visually engaging platform where I can present my development work, share ideas, and connect with potential collaborators or clients",
      tags: ["React", "JavaScript", "tailwindcss", "CSS"],
      links: { web: "https://mustapha377.github.io/my-website/", code: "#" },
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
      id: 2,
      title: "Todo-List",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at neque vitae felis elementum malesuada. Sed risus velit, sodales quis molestie et, venenatis quis tortor.",
      tags: ["React", "JavaScript", "tailwindcss", "CSS"],
      links: { web: "https://mustapha377.github.io/Todo-list-page/", code: "#" },
      image: Todoimage,
      status: "in-progress",
      Features: [
        "Responsive Design", 
        "Smooth Navigation & Scrolling", 
        "Github & Live Demo Links", 
        "Project Showcase with Details"
      ]
    },
    {
      id: 3,
      title: "My-Website",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at neque vitae felis elementum malesuada. Sed risus velit, sodales quis molestie et, venenatis quis tortor.",
      tags: ["React", "JavaScript", "tailwindcss", "CSS"],
      links: { web: "https://mustapha377.github.io/my-website/", code: "#" },
      image: webImage,
      status: "completed",
      Features: [
        "Responsive Design", 
        "Smooth Navigation & Scrolling", 
        "Github & Live Demo Links", 
        "Project Showcase with Details"
      ]
    },
    {
      id: 4,  
      title: "Todo-List",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at neque vitae felis elementum malesuada.",
      tags: ["React", "JavaScript", "tailwindcss", "CSS"],
      links: { web: "https://mustapha377.github.io/Todo-list-page/", code: "#" },
      image: Todoimage,
      status: "planning",
      Features: [
        "Responsive Design", 
        "Smooth Navigation & Scrolling", 
        "Github & Live Demo Links", 
        "Project Showcase with Details"
      ]
    },
    {
      id: 5,
      title: "My-Website",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at neque vitae felis elementum malesuada.",
      tags: ["React", "JavaScript", "tailwindcss", "CSS"],
      links: { web: "https://mustapha377.github.io/my-website/", code: "#" },
      image: webImage,
      status: "completed",
      Features: [
        "Responsive Design", 
        "Smooth Navigation & Scrolling", 
        "Github & Live Demo Links", 
        "Project Showcase with Details"
      ]
    },
    {
      id: 6,
      title: "Todo-List",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at neque vitae felis elementum malesuada.",
      tags: ["React", "JavaScript", "tailwindcss", "CSS"],
      links: { web: "https://mustapha377.github.io/Todo-list-page/", code: "#" },
      image: Todoimage,
      status: "in-progress",
      Features: [
        "Responsive Design", 
        "Smooth Navigation & Scrolling", 
        "Github & Live Demo Links", 
        "Project Showcase with Details"
      ]
    },
    {
      id: 7,
      title: "My-Website",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at neque vitae felis elementum malesuada.",
      tags: ["React", "JavaScript", "tailwindcss", "CSS"],
      links: { web: "https://mustapha377.github.io/my-website/", code: "#" },
      image: webImage,
      status: "completed",
      Features: [
        "Responsive Design", 
        "Smooth Navigation & Scrolling", 
        "Github & Live Demo Links", 
        "Project Showcase with Details"
      ]
    },
    {
      id: 8,  
      title: "Todo-List",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at neque vitae felis elementum malesuada.",
      tags: ["React", "JavaScript", "tailwindcss", "CSS"],
      links: { web: "https://mustapha377.github.io/Todo-list-page/", code: "#" },
      image: Todoimage,
      status: "in-progress",
      Features: [
        "Responsive Design", 
        "Smooth Navigation & Scrolling", 
        "Github & Live Demo Links", 
        "Project Showcase with Details"
      ]
    },
];

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