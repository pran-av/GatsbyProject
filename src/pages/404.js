import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

function NotFound() {
  return (
    <>
      <Layout>
      <div>
        <div class="mx-auto ml-3 mr-3 text-center">
          <h1 class="text-3xl justify-center text-center mb-3 mt-4">Schodinger's Link</h1>
          <p class="mt-2 mb-2 font-mono">You have stumbled across unknown!</p>
          <Link to="/" class="font-mono w-auto text-gray-300 hover:text-white duration-500">Click here to return Home</Link>
        </div>
      </div>
      </Layout>
    </>
  )
}

export default NotFound