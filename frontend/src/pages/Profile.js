import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


const Profile = () => {

  const [bets, setBet] = useState('')

  const { username } = useParams()
  useEffect(() => {

    axios.get(`/profile/${username}`)
      .then(res => {
        console.log(res.data)
        setBet(res.data)
      })
      .catch(e => {
        console.error(e)
      })
  }, [username]);
  
  try {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Welcome, {username}!</h1>
            <h2>Your Bets</h2>
            <ul className="list-group">
              {bets.map((bet, index) => (
                <li key={index} className="list-group-item">
                  <div><strong>{bet.event.name}</strong> - {bet.event.description}: {bet.amount} tokens</div>
                  <div>Option selected: {bet.option.desc}</div>
                  <div><Link to={"/bets/" +bet.event.name }className="btn btn-primary">See Event</Link></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  } catch {
    <p>Loading...</p>
  }
}
export default Profile;
