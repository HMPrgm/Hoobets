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
  let betsActive = []
  let betsInActive = []
  for (let bet of bets) {
    if (bet.event.active)
    {
      betsActive.push(bet)
    }
    else
    {
      betsInActive.push(bet)
    }
  }
  
  try {
    return (
      <div className="container">
        <div className="row">
        <div className="col"></div>
          <div className="col-6">
            <h1>Welcome, {username}!</h1>
            <h2>Your Bets</h2>
            <ul className="list-group">
            {betsActive.length ? <h3 className='text-muted fw-normal' style={{fontSize: '1.1em'}}>Active Bets</h3>: ""}
              {betsActive.map((bet, index) => (
                <li key={index} className="list-group-item">
                  <div><strong>{bet.event.name}</strong> - {bet.event.description}: {bet.amount} tokens</div>
                  <div>Option selected: {bet.option.desc}</div>
                  <div><Link to={"/bets/" +bet.event.name }className="btn btn-primary">See Event</Link></div>
                </li>
              ))}
            </ul>
            <ul className="list-group">
            {betsInActive.length ? <h3 className='text-muted fw-normal' style={{fontSize: '1.1em'}}>Past Bets</h3>: ""}
              {betsInActive.map((bet, index) => (
                <li key={index} className="list-group-item">
                  <div><strong>{bet.event.name}</strong> - {bet.event.description}: {bet.amount} tokens</div>
                  <div>Option selected: {bet.option.desc}</div>
                  <div><Link to={"/bets/" +bet.event.name }className="btn btn-primary">See Event</Link></div>
                </li>
              ))}
            </ul>
          </div>
          <div className="col"></div>
        </div>
      </div>
    );
  } catch {
    <p>Loading...</p>
  }
}
export default Profile;
