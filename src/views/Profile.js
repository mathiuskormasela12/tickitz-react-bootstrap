// ===== Profile
// import all modules
import React, {Fragment} from 'react';

// import all components
import { MyNavbar, ProfileContent, Footer } from '../components';

function Profile() {
  return (
    <Fragment>
      <MyNavbar abs={true} />
      <ProfileContent />
      <Footer />
    </Fragment>
  );
}

export default Profile;