import React from "react";
import {Link} from "gatsby";
import PropTypes from "prop-types"; //Defines properties of the component, as in the variable to be linked to a component.

//Navigation component has a property called 'title'
function Navigation( {title} ) {
    return(
        <div>
            <h1>Hello There! {title}</h1>
        </div>
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