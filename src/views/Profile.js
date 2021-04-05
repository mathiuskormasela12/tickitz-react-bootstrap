// ===== Profile
// import all modules
import React, {Fragment} from 'react';

// import all components
import { MyNavbar, ProfileContent } from '../components';

function Profile() {
  return (
    <Fragment>
      <MyNavbar abs={true} />
      <ProfileContent />
    </Fragment>
  );
}

export default Profile;