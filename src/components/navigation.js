import React from "react";
import {Link} from "gatsby";
import PropTypes from "prop-types"; //Defines properties of the component, as in the variable to be linked to a component.

//Navigation component has a property called 'title'
function Navigation( {title} ) {
    return(
        <nav class="mx-auto mt-3">
            <div class = "flex-none text-center nav-center my-2 font-sans font-semibold text-4xl text-gray-200">
                <Link to='/' class="align-middle">{title}</Link>
            </div>

            <div class="w-1/2 min-w-[640px] mx-auto">
                <hr class="border-gray-400 border-t-2" />
            </div>

            <div class="flex justify-center space-x-6 mt-1 font-mono">
                <Link to="/musings" class="w-auto text-gray-300 hover:text-white duration-500 flex-shrink-0">MUSINGS</Link>
                <Link to="/projects" class="w-auto text-gray-300 hover:text-white duration-500 flex-shrink-0">PROJECTS</Link>
                <Link to="/adventures" class="w-auto text-gray-300 hover:text-white duration-500 flex-shrink-0">ADVENTURES</Link>
                <Link to="/about" class="w-auto text-gray-300 hover:text-white duration-500 flex-shrink-0">ABOUT</Link>
            </div>
        </nav>
    )
}

//Define default Navigation title to be displayed
Navigation.defaultProps = {
    title: "Pranav Mandhare"
}

//Define ideal Navigation title is a string
Navigation.propTypes = {
    title: PropTypes.string,
}

export default Navigation