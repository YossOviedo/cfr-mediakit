import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    {data.allGoogleSpreadsheetSheet1.edges.map((student) =>
        <Card 
          key={student.node.id} 
          title={student.node.studentName} 
          content={student.node.major} 
        />
      )}
  </Layout>
)

export const query = graphql`
  query{
    allGoogleSpreadsheetSheet1 {
      edges {
        node {
          id
          studentName
          major
        }
      }
    }
  }
`

export default IndexPage
