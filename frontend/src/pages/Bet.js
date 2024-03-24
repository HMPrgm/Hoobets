import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";

const Bet = () => {
  const [bet, setBet] = React.useState('')
  const { name } = useParams()

  axios.get(`/bets/${name}`)
    .then(res => {
      setBet(res.data)
    })
    .catch(e => {
      console.error(e)
    })


  return (
    <div className="card mt-4">
      <div className="card-body">
        <h5 className="card-title">{bet.name}</h5>
        <p className="card-text">{bet.description}</p>
        <p className="card-text"><strong>Start Time:</strong> {new Date(bet.start).toLocaleString()}</p>
        <p className="card-text"><strong>End Time:</strong> {new Date(bet.end).toLocaleString()}</p>
      </div>
    </div>
  )
};

export default Bet;