import React  from "react";
import Box from "./projectBox";
import { Element } from "react-scroll";
import Divider from "./divider";
import webImage from "../asset/img/website.png"
import Todoimage from "../asset/img/TodoList.png"

function Project(){

  const projects = [
    {
      title: "My-Website",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at neque vitae felis elementum malesuada. Sed risus velit, sodales quis molestie et, venenatis quis tortor. Nam quam metus, interdum eget cursus porta, tempus eu erat. Morbi accumsan nulla quis tempus suscipit. Donec id elit eu dolor euismod dignissim. Nulla dignissim lorem lobortis erat vestibulum, quis accumsan nisi ullamcorper. Mauris egestas luctus nisi, nec tincidunt ipsum mattis semper.",
      tags: ["React", "JavaScript", "JSX", "CSS"],
      links: { web: "#", code: "#" },
      image: webImage,
    },
    {
      title: "Todo-List",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at neque vitae felis elementum malesuada. Sed risus velit, sodales quis molestie et, venenatis quis tortor. Nam quam metus, interdum eget cursus porta, tempus eu erat. Morbi accumsan nulla quis tempus suscipit. Donec id elit eu dolor euismod dignissim. Nulla dignissim lorem lobortis erat vestibulum, quis accumsan nisi ullamcorper. Mauris egestas luctus nisi, nec tincidunt ipsum mattis semper.e",
      tags: ["React", "JavaScript", "JSX", "CSS"],
      links: { web: "#", code: "#" },
      image: Todoimage,
    },
  ];

    return (
      <Element name="project">
    <section className="section-container">
      <h2 className="section-heading">project</h2>
      <div className="box-container">
       <div className="project-items">
         <Box 
          projects={projects}
         />
        </div>
        </div>
    </section>
    </Element>
       )
}


export default Project;
