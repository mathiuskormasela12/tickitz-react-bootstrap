// Import all modules
import React, { Fragment, useEffect } from 'react';

// import all components
import {
    MyNavbar,
    Footer,
    Payment
} from '../components'


function Payments() {
  useEffect(() => {
    document.title = 'Tickitz | Payment'
  });

  return (
    <Fragment>
      <MyNavbar abs={true}/>
      <Payment />
      <Footer />
    </Fragment>
  );
}

export default Payments;