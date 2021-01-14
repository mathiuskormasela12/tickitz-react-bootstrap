// import all modules
import React, { Fragment } from 'react';

// Import react bootstrap components
import { 
  Col,
  Row,
} from 'react-bootstrap';

// import scss
import styled from './style.module.scss';

export default function Separator() {
  return (
    <Fragment>
      <div className="mt-4">
        <Row>
          <Col className={ styled.col } xs={5}>
            <hr className={`w-100 ${styled.hr}`} />
          </Col>
          <Col xs={2}>
            <p className={`text-center text-muted`}>Or</p>
          </Col>
          <Col xs={5} className={ styled.col }>
            <hr className={`w-100 ${styled.hr}`} />
          </Col>
        </Row>
      </div>
    </Fragment>
  );
}