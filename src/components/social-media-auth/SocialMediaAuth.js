// import all modules
import React, { Fragment } from 'react';

// Import react bootstrap components
import { 
  Col,
  Row,
  Button,
  Image
} from 'react-bootstrap';

// import scss
import styled from './style.module.scss';

// Import images
import facebook from '../../assets/images/facebook.png';
import google from '../../assets/images/google.png';

export default function SocialMediaAuth() {
  return (
    <Fragment>
      <div className="mt-4">
        <Row className="justify-content-lg-between justify-content-center">
          <Col lg={6} xs={2}>
            <Button variant="light" className={`${styled.btnShadow} w-100 position-relative`}>
              <Image src={google} alt="Google" className={`${styled.img}`} />
              <span className={`text-dark d-none d-lg-inline ${styled.textGoogle}`}>
                Google
              </span>
            </Button>            
          </Col>
          <Col lg={6} xs={2}>
            <Button variant="light" className={`${styled.btnShadow} w-100 position-relative`}>
              <Image src={facebook} alt="Facebook" className={`${styled.img}`} />
              <span className={`text-dark ml-2 d-none d-lg-inline ${styled.textFacebook}`}>
                Facebook
              </span>
            </Button>            
          </Col>
        </Row>
      </div>
    </Fragment>
  );
}