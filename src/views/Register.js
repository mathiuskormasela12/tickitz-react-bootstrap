// Import all modules
import React, { Fragment, useEffect } from 'react';

// Import all components
import { 
  RegisterHero
} from '../components';

function Login() {
  useEffect(() => {
    document.title = 'Tickitz | Sign Up'
  });

  return (
    <Fragment>
      <RegisterHero />
    </Fragment>
  );
}

export default Login;