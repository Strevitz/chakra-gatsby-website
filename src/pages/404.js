import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className={"container"}>
      <h1>404</h1>
      <p>
        Strona, którą podałeś nie istnieje tu i teraz, lecz nie smuć się i
        upewnij się, że poprawnie ją wpisałeś.
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
