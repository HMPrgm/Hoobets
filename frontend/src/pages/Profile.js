import React, { useState } from 'react';

const Profile = () => {

  const [username, setUsername] = useState('')
  const [bets, setBet] = useState('')

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Welcome, {username}!</h1>
          <h2>Your Bets</h2>
          <ul className="list-group">
            {bets.map((bet, index) => (
              <li key={index} className="list-group-item">
                <strong>{bet.name}</strong> - {bet.description} tokens
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
