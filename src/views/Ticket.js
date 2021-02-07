// Import all modules
import React, { Fragment, useEffect } from 'react';

// import all components
import {
    MyNavbar,
    Footer,
    Ticket
} from '../components'


function Orders() {
  useEffect(() => {
    document.title = 'Tickitz | Ticket'
  });

  return (
    <Fragment>
      <MyNavbar abs={true}/>
      <Ticket />
      <Footer />
    </Fragment>
  );
}

export default Orders;