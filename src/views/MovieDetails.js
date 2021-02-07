// Import all modules
import React, { Fragment, useEffect } from 'react';

// import all components
import {
    MyNavbar,
    Footer
} from '../components'

// Import all components
import { 
  MovieDetail,
  ShowTimes
} from '../components';

function MovieDetails(props) {
  useEffect(() => {
    document.title = 'Tickitz | Movie Details'
  });

  return (
    <Fragment>
      <MyNavbar abs={true}/>
      <MovieDetail id={props.match.params.id}/>
      <ShowTimes id={props.match.params.id}/>
      <Footer />
    </Fragment>
  );
}

export default MovieDetails;