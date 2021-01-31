import React from 'react'
import { Helmet } from 'react-helmet'

export default ({ title }) => {
  return (
    <Helmet>
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf8" />
      <meta
        name="description"
        content="Official Website for Loveless Engineering | Design | Development | Deployment"
      />
      <meta
        name="viewport"
        content="viewport-fit=cover,
                 width=device-width,
                 initial-scale=1.0,
                 minimum-scale=1.0,
                 maximum-scale=1.0,
                 user-scalable=no"
      />
      <title>Leiiid.xyz ]|[ {title}</title>
    </Helmet>
  )
}
