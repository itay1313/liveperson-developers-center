import React from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const SEO = ({ description, title }) => (
  <StaticQuery
    query={`${SeoQuery}`}
    render={(data) => {
      const metaTitle = title
        ? `${title} | ${data.site.siteMetadata.title}`
        : data.site.siteMetadata.title
      const metaDescription = description || data.site.siteMetadata.description

      return (
        <Helmet>
          <title>{metaTitle}</title>
          <meta name="description" content={metaDescription} />
        {/* need to put in a different file */}
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,700,900"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        </Helmet>
      )
    }}
  />
)

const SeoQuery = graphql`
query {
  site {
    siteMetadata {
      title
      description
    }
  }
}
`

export default SEO
