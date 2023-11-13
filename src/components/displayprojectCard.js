import React from "react";
import ProjectCard from "./projectCard";

import { graphql, useStaticQuery } from "gatsby";

function DisplayProjects() {

    const projects = useStaticQuery(graphql`
    query {
        allContentfulProjects {
          edges {
            node {
              title
              slug
              dateTime
              description{
                description
              }
              tags
            }
          }
        }
      }
    `)
    const latestProjects = projects.allContentfulProjects

    return(
        <div class="mx-auto mt-5 mb-5">
          <div>
            <h1> FIRST BLOG </h1>
            <div>
            {
                  latestProjects.edges.map(edge => {
                    return(
                      <ProjectCard
                          slug = {edge.node.slug}
                          title = {edge.node.title}
                          dateTime = {edge.node.dateTime}
                          description = {edge.node.description}
                          tags = {edge.node.tags}
                      />
                    )                      
                  })
              }
            </div>
          </div>
        </div>
    )
}

export default DisplayProjects