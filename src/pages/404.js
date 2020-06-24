import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>The URL contains an invalid path</h1>
    <h3>"Do not follow where the path may lead. Go instead where there is no path and leave a trail." -Ralph Waldo Emerson</h3>
  </Layout>
)

export default NotFoundPage
