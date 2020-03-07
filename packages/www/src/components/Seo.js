import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import partyCorgiStill from '../images/party-corgi-still.gif'

const Seo = ({ description, lang, meta, keywords, title, siteUrl, image }) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const { siteMetadata } = data.site
        const { siteUrl } = siteMetadata
        const metaDescription =
          description || siteMetadata.description

        const ogImage = image
          ? `/images/ogImages/${image}`
          : siteMetadata.image

        return (
          <Helmet
            htmlAttributes={{
              lang
            }}
            title={title || siteMetadata.title}
            titleTemplate={`%s | ${title || siteMetadata.title}`}
            meta={[
              {
                name: 'description',
                content: metaDescription
              },
              {
                property: 'og:title',
                content: title || siteMetadata.title
              },
              {
                name: 'og:url',
                content: siteUrl
              },
              {
                property: 'og:image',
                content: `${siteUrl}${ogImage}`
              },
              {
                property: 'og:image:width',
                content: '1200'
              },
              {
                property: 'og:image:height',
                content: '630'
              },
              {
                property: 'og:image:alt',
                content: "Party Corgi Network"
              },
              {
                property: 'og:description',
                content: metaDescription
              },
              {
                property: 'og:type',
                content: 'website'
              },
              {
                name: 'twitter:card',
                content: 'summary_large_image'
              },
              {
                name: 'twitter:creator',
                content: siteMetadata.twitterUsername
              },
              {
                name: 'twitter:title',
                content: title
              },
              {
                name: 'twitter:image',
                content: `${siteUrl}${ogImage}`
              },
              {
                name: 'twitter:description',
                content: metaDescription
              }
            ].concat(meta)}
          >
            <link rel="icon" type="image/gif" href={partyCorgiStill} />
          </Helmet>
        )
      }}
    />
  )
}

Seo.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: []
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string
}

export default Seo

const detailsQuery = graphql`
  query DefaultSeoQuery {
    site {
      siteMetadata {
        title
        description
        image
        twitterUsername
        twitterImage
        siteUrl
      }
    }
  }
`
