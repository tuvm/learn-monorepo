import React from 'react';
import { UserType } from '@shared/interface';

const UserProfile = ({ username, fullname }: UserType) => {
  return (
    <div>
      <h2>Username: {username}</h2>
      <h2>Fullname: {fullname}</h2>
    </div>
  );
};

export default UserProfile;
