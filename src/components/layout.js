/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React from "react";
import Navigation from "./navigation";

function Layout( {children} ) {
  return(
    <div>
      <Navigation />
      {children}
    </div>
  )
}

export default Layout