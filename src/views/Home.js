// Import all modules
import React, { Fragment, useEffect } from 'react';

// Import all components
import { 
  
} from '../components';

function Home() {
  useEffect(() => {
    document.title = 'Tickitz | Home'
  });

  return (
    <Fragment>
      <h1>Hello</h1>
    </Fragment>
  );
}

export default Home;