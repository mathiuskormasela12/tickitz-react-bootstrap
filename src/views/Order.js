// Import all modules
import React, { Fragment, useEffect } from 'react';

// import all components
import {
    MyNavbar,
    Footer,
    Order
} from '../components'


function Orders() {
  useEffect(() => {
    document.title = 'Tickitz | Order'
  });

  return (
    <Fragment>
      <MyNavbar abs={true}/>
      <Order />
      <Footer />
    </Fragment>
  );
}

export default Orders;