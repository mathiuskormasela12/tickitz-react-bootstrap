// Import all modules
import React, { Fragment, useEffect } from 'react';

// import all components
import {
    MyNavbar,
    Footer
} from '../components'

// Import all components
import { 
  MovieDetail
} from '../components';

function MovieDetails() {
  useEffect(() => {
    document.title = 'Tickitz | Movie Details'
  });

  return (
    <Fragment>
      <MyNavbar abs={true}/>
      <MovieDetail />
      <Footer />
    </Fragment>
  );
}

export default MovieDetails;