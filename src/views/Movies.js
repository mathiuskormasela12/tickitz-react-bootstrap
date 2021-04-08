// ===== Movies
// import all modules
import React, {Fragment} from 'react';

// import all components
import {
  MyNavbar,
  Footer,
  Movies as MoviesComponent,
} from '../components';

export default function Movies(props) {
  return (
    <Fragment>
      <MyNavbar abs={true} />
      <MoviesComponent {...props} />
      <Footer />
    </Fragment>
  )
}