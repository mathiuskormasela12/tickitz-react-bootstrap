// Import all modules
import React, { Fragment, useEffect } from 'react';

// Import all components
import { 
  MyNavbar,
  HomeHero,
  NowShowing,
  Upcoming,
  MovieGoers,
  Footer
} from '../components';

function Home() {
  useEffect(() => {
    document.title = 'Tickitz | Home'
  });

  return (
    <Fragment>
      <MyNavbar />
      <HomeHero />
      <NowShowing />
      <Upcoming />
      <MovieGoers />
      <Footer />
    </Fragment>
  );
}

export default Home;