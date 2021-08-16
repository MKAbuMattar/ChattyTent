
import React, { Fragment } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const MeatDecorator = ({ title, description }) => {
  return (
    <Fragment>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>
      </HelmetProvider>
    </Fragment>
  )
}

export default MeatDecorator
