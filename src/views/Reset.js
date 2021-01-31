// Import all modules
import React, { Fragment, useEffect } from 'react';

// Import all components
import { 
  ResetPasswordHero
} from '../components';

function Reset() {
  useEffect(() => {
    document.title = 'Tickitz | Reset Password'
  });

  return (
    <Fragment>
      <ResetPasswordHero />
    </Fragment>
  );
}

export default Reset;