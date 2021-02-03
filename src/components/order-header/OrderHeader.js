// import all modules
import React, { Fragment } from 'react';

// Import react bootstrap components
import {
  Card
} from 'react-bootstrap';

// import scss
import styled from './style.module.scss';

export function OrderHeader() {
  return (
    <Fragment>
      <header className={styled.header}>
        <h3 className="mb-4">Movie Selected</h3>
        <Card className={styled.card}>
          <Card.Header className={styled.cardHeader}>
            <h4 className={`${styled.orderTitle}`}>
              Spider-Man: Homecoming
            </h4>
            <button className={`${styled.btnOrder} btn`}>
              Change movie
            </button>
          </Card.Header>
        </Card>
      </header>
    </Fragment>
  );
}