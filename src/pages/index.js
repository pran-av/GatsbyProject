import React from "react";
import Layout from "../components/layout";
import DisplayProjects from "../components/displayprojectCard";
import ProjectCard from "../components/projectCard";

export default function Home() {
  return(
    <>
      <h1>Hello!!</h1>
      <Layout />
      <DisplayProjects />
      <ProjectCard/>
    </>
    
  )
}