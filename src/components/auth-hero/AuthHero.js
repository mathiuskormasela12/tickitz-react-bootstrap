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
import FormLogin from '../form-login/FormLogin';

// import scss
import styled from './style.module.scss';

// Import images
import tickitz from '../../assets/images/tickitz.svg';

export function AuthHero() {
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
            <FormLogin />
          </Row>
        </Container>
      </div>
    </Fragment>
  );
}