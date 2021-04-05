// ===== HeroGray
// import all modules
import React, {Fragment} from 'react';

// import styled
import styled from './style.module.scss';

export function HeroGray(props) {
  return (
    <Fragment>
      <div className={styled.hero}>
        { props.children }
      </div>
    </Fragment>
  );
}