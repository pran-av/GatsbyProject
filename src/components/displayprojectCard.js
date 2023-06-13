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
            }
          }
        }
      }
    `)
    const latestProjects = projects.allContentfulProjects

    return(
        <div class="mx-auto mt-5 mb-5">
            {
                latestProjects.edges.map(edge => {
                    <ProjectCard
                        //slug = {edge.node.slug}
                        title = {edge.node.title}
                        //dateTime = {edge.node.dateTime}
                        //description = {edge.node.description}
                        //tags = {edge.node.tags}
                    />
                })
            }
        </div>
    )
}

export default DisplayProjects