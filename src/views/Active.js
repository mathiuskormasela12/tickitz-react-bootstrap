// Import all modules
import React, { Fragment, useEffect } from 'react';

// Import all components
import { 
  ActiveHero
} from '../components';

function Home() {
  useEffect(() => {
    document.title = 'Tickitz | Activated Account'
  });

  return (
    <Fragment>
      <ActiveHero />
    </Fragment>
  );
}

export default Home;