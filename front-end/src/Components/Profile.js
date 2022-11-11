import React from 'react';
import { Main } from './style';

const user = {username: 'sallyskellington',
location: 11103,
careStatus: 'OFFERING',
bio: 'Loves animals and cooking new recipes'
}

const Profile = () => {
  return (
    <Main className="profile">
      <h3>User Name: {user.username}</h3>
      <h3>Location: {user.location}</h3>
      <h3>About: {user.bio}</h3>
      <h3>I am currently {user.careStatus} care</h3>
    </Main>
  );
};

export default Profile;
