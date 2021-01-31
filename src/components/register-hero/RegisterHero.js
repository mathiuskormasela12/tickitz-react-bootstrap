// import all modules
import React, { Fragment } from 'react';

// Import react bootstrap components
import { 
  Container,
  Row,
  Col,
  Image
} from 'react-bootstrap';

// import all components
import Sidebar from '../auth-sidebar/Sidebar';
import FormRegister from '../form-register/FormRegister';

// import scss
import styled from './style.module.scss';

// Import images
import tickitz from '../../assets/images/tickitz.svg';

export function RegisterHero() {
  return (
    <Fragment>
      <div>
        <Container fluid>
          <Row>
            <Sidebar>
              <Container>
                <Row>
                  <Col lg={{ span: 8, offset: 1}}>
                    <div className="w-100">
                      <Image src={ tickitz } className={ styled.img } />
                    </div>
                    <div className="mt-5 mb-5">
                      <h3 className={`${styled.title} text-white font-weight-bold`}>Lets build your account</h3>
                      <p className={`${styled.subtitle} mt-3`}> 
                        To be a loyal moviegoer and access all of features,
                        your details are required.
                      </p>
                    </div>
                    <div className="col-xl-12 mt-4 d-none d-md-block d-xl-block d-lg-block">
                      <div className="row">
                        <div className="col-md-12">
                          <div className={`row ${styled.heroProgress} align-items-center mb-4`}>
                            <div className="col-md-1 col-lg-1 position-relative mr-lg-2 mr-xl-0">
                              <span className={`${styled.verticalLine} d-inline-block position-absolute`}></span>
                              <span className={`${styled.bullets} ${styled.bulletsWhite}`}>1</span>
                            </div>
                            <div className="col-md-11 col-lg-10">
                              <p className="text-white d-inline ml-3">
                                Fill your additional details
                              </p>
                            </div>
                          </div>
                          <div className={`row ${styled.heroProgress} align-items-center mb-4`}>
                            <div className="col-md-1 col-lg-1 position-relative mr-lg-2 mr-xl-0">
                              <span className={`${styled.verticalLine} d-inline-block position-absolute`}></span>
                              <span className={`${styled.bullets} ${styled.bulletsTransparent}`}>2</span>
                            </div>
                            <div className="col-md-11 col-lg-10">
                              <p className={`${styled.textGray} d-inline ml-3`}>
                                Activate your account
                              </p>
                            </div>
                          </div>
                          <div className={`row ${styled.heroProgress} align-items-center mb-4`}>
                            <div className="col-md-1 col-lg-1 position-relative mr-lg-2 mr-xl-0">
                              <span className={`${styled.bullets} ${styled.bulletsTransparent}`}>3</span>
                            </div>
                            <div className="col-md-11 col-lg-10">
                              <p className={`${styled.textGray} d-inline ml-3`}>
                                Done
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Sidebar>
            <FormRegister />
          </Row>
        </Container>
      </div>
    </Fragment>
  );
}