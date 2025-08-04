import webdev_svg from "../asset/icons/web-development-svgrepo-com.svg";
import frontend_svg from "../asset/icons/website-svgrepo-com.svg";
import backend_svg from "../asset/icons/coding-html-svgrepo-com.svg";
import fullstack_svg from "../asset/icons/browser-website-svgrepo-com.svg";

export const SVG =[
    {  
      id: 1,
      source: webdev_svg,
      heading: "Web Development",
      Content: "I build fast, responsive, and modern websites tailored to your needs. Whether it's a simple landing page or a full company website, I ensure mobile-friendly design and clean code using the latest web technologies like ",
      list: ["React.js", "Tailwind.css", "Javascricpt.js","Node.js", "PHP", ]
    },
     {
      id: 2,
      source: frontend_svg,
      heading: "Front-End Development",
      Content: "I create visually stunning and highly interactive front-end applications using React.js and Tailwind CSS. I specialize in:",
      list: ["Pixel-perfect UI from Figma/Design files",
             "Responsive layouts for mobile, tablet, and desktop",
             "Reusable components and clean code architecture",
            "Smooth animations and transitions (Framer Motion)" ]
    },
     {
      id: 3,
      source: backend_svg,
      heading: "Back-End Development",
      Content: "I develop secure, high-performance backend services using Node.js and Express.js. My backend services include:",
      list: ["RESTful APIs",
            "Authentication (JWT, OAuth)",
            "Real-time features with WebSockets",
            "Database management with MongoDB, MySQL",
           "API Integration (Payment Gateways, Third-party APIs)"
 ]
    },
     {
      id: 4,
      source: fullstack_svg,
      heading: "Full-Stack Web Application ",
      Content: "Need the complete package? I handle both front-end and back-end to deliver fully functional applications: ",
      list: ["E-commerce stores",
           "Dashboards & Admin Panels",
           "Booking systems",
           "Social platforms",
           "Custom business tools"]
    }
  ]