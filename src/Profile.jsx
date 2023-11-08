import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { user } = useAuth0();

  return (
    <div>
      <h1>Profile Page</h1>
      {user && (
        <>
          <p>Name: {user.name}</p>
        </>
      )}
    </div>
  );
}

export default Profile;
