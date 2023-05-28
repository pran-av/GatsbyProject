import React from "react";
//import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

function ProjectCard ( { slug, title, dateTime, description, tag} ) {
    return(
        <div class="container mx-auto">
            <div class="border mx-4 mt-7 max-w-fit rounded">
                <h2 class="mx-auto max-w-fit text-2xl text-center font-mono font-bold hover:text-green-200 duration-500 mt-2">
                    <Link to={slug}> { title } </Link>
                </h2>
                <div class="flex mt-3 mb-3 ml-4 justify-evenly">
                    <h3 class="border px-3 rounded-lg">{ tag }</h3>
                    <h3 class="border px-3 rounded-lg">Tag 2</h3>
                    <h3 class="border px-3 rounded-lg">Tag 3</h3>
                </div>
                <h3 class="text-center mx-auto ml-4 mb-2"> { dateTime } </h3>
                <hr />
                <p class="ml-6 mt-3 mb-5"> { description } </p>
            </div>
        </div>
    )
}

export default ProjectCard