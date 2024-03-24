import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";

const Bet = () => {
  const [bet, setBet] = React.useState('')
  const { name } = useParams()
  useEffect(() => {

    axios.get(`/bets/${name}`)
      .then(res => {
        setBet(res.data)
      })
      .catch(e => {
        console.error(e)
      })
  }, [name]);


  // const handleBetChange = (e) => {
  //   setBet(parseInt(e.target.value));
  // };

  const handlePlaceBet = () => {
    // Place bet logic here
    // console.log(`Placing bet of ${bet} on ${betInfo.title}`);
  };

  return (

    <div className="container d-flex justify-content-center">
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">{bet.name}</h2>
        <p className="card-text">Description: {bet.description}</p>
        <p className="card-text">Odds: {bet.id}</p>
        <p className="card-text">Minimum Bet: {bet.id}</p>
        <p className="card-text">Maximum Bet: {bet.id}</p>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            placeholder="Enter your bet amount"
          />
        </div>
        <button className="btn" onClick={handlePlaceBet}>Place Bet</button>
      </div>
    </div>
    </div>
  );
};

export default Bet;