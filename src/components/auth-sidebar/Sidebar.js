// Import all modules
import React, { Fragment } from 'react';

// Import bootstrap component
import { Col } from 'react-bootstrap';

// import scss
import styled from './style.module.scss';

function Sidebar(props) {
  return (
    <Fragment>
      <Col xs={8} className={ `${styled.heroAside} d-none d-lg-flex align-items-center` }>
        { props.children }
      </Col>
    </Fragment>
  );
}

export default Sidebar;