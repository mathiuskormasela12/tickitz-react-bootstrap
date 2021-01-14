// Import all modules
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <Fragment>
      <Helmet>
        <title>Tickitz | Home</title>
      </Helmet>
      <h1>Hello</h1>
    </Fragment>
  );
}

export default Home;