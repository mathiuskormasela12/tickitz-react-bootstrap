// import all modules
import React, { Fragment } from 'react';

// Import react bootstrap components
import { 
  Container,
  Row,
  Image
} from 'react-bootstrap';

// import all components
import Sidebar from '../auth-sidebar/Sidebar';
import Form from '../form-reset-password/FormResetPassword';

// import scss
import styled from './style.module.scss';

// Import images
import tickitz from '../../assets/images/tickitz.svg';

export function ResetPasswordHero() {
  return (
    <Fragment>
      <div>
        <Container fluid>
          <Row>
            <Sidebar>
              <div className="w-100 text-center">
                <Image src={ tickitz } className={ styled.img } />
                <h1 className="text-white">wait, watch, wow!</h1>       
              </div>
            </Sidebar>
            <Form />
          </Row>
        </Container>
      </div>
    </Fragment>
  );
}