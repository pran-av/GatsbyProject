import React from "react";
import ProjectCard from "./projectCard";

import { graphql, useStaticQuery } from "gatsby";

function DisplayProjects() {

    const projects = useStaticQuery(graphql`
    query{
        project{
            edges{
                node{
                    slug
                    title
                    dateTime
                    description
                    tags
                }
            }
        }
    }
    `)
    const latestProjects = projects.project

    return(
        <div class="mx-auto mt-5 mb-5">
            {
                latestProjects.edges.map(edge => {
                    <Record
                        slug = {edge.node.slug}
                        title = {edge.node.title}
                        dateTime = {edge.node.dateTime}
                        description = {edge.node.description}
                        tags = {edge.node.tags}
                    />
                })
            }
        </div>
    )
}

export default DisplayProjects