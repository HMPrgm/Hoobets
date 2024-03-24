import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";

const Bet = () => {
  const [bet, setBet] = React.useState(0)
  const [betAmount, setBetAmount] = React.useState('')
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

  const handleBetChange = (e) => {
    // Place bet logic here
    setBetAmount(Math.max(parseInt(e.target.value), 0));
    
  };
  const handlePlaceBet = (e) => {
    // Place bet logic here
    axios.post(`/addwager`, {
      "highlow": e.target.innerText === "Lower" ? -1:1,
      "name":name,
      "amount":20
    })
      .then(res => {
        console.log(res.data)
      })
      .catch(e => {
        console.error(e)
      })
  };

  return (

    <div className="container">
      <div className="row">
        <div className="col"></div>
        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">{bet.name}</h2>
              <p className="card-text">{bet.description}</p>
              <div className="text-center">
                s
              </div>
              <p className="card-text">Odds: {bet.id}</p>
              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter your bet amount"
                  value={betAmount}
                  onChange={handleBetChange}
                />
              </div>
              <button className="btn btn-success" onClick={handlePlaceBet}>Higher</button>
              <button className="btn btn-warning" onClick={handlePlaceBet}>Lower</button>
            </div>
          </div>
        </div>
        <div className="col"></div>

      </div>
    </div>
  );
};

export default Bet;