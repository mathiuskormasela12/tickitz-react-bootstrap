// Import all modules
import React, { Fragment, useEffect } from 'react';

// Import all components
import { 
  ResetHero
} from '../components';

function ResetPassword() {
  useEffect(() => {
    document.title = 'Tickitz | Reset Password'
  });

  return (
    <Fragment>
      <ResetHero />
    </Fragment>
  );
}

export default ResetPassword;