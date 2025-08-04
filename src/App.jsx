import React, { useEffect } from "react";
import Nav from "./component/nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/project";
import ContactForm from "./pages/ContactForm";
import Footer from "./component/footer";
import { Routes, Route } from 'react-router-dom';
import ProjectDetails from "./component/ProjectDetail";
import { useLocation } from "react-router-dom";


function App() {
  const location = useLocation();
  // check if the current path is for a project detail page
  useEffect(() => {
    if (location.state?.scrollto === "project") {
      const projectElement = document.getElementById("project");
      if (projectElement) {
        projectElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }
  }, [location])

 

  return (
  
      <Routes>
      {/* Home route with full UI */}
      <Route
        path="/"
        element={
          <div className="overflow-x-hidden">
            <Nav />
            <Home />
            <About />
            <Project />
            <ContactForm />
            <Footer />
          </div>
        }
      />
      {/* project box   */}
      <Route path="/project" element={<Project />} />
      {/* Dynamic project detail page */}
      <Route path="project/:id" element={<ProjectDetails />} />
    </Routes>
  );
}

export default App;