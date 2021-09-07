import { graphql } from "gatsby"
import React from "react"
import { useTranslation } from "react-i18next"
import Layout from "../../components/Layout"

const IndexPage = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <h1>Different content</h1>
    </Layout>
  )
}
export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`

export default IndexPage
