// Import all modules
import React, { Fragment, useEffect } from 'react';

// Import all components
import { 
  AuthHero
} from '../components';

function Login() {
  useEffect(() => {
    document.title = 'Tickitz | Sign In'
  });

  return (
    <Fragment>
      <AuthHero />
    </Fragment>
  );
}

export default Login;