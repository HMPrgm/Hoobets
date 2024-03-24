import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Link, useNavigate, useParams } from "react-router-dom";
import BetView from "../features/BetView";
import BetResult from "../features/BetResult";

const Bet = ({ handleLoggedIn, credits, username }) => {

  const [bet, setBet] = React.useState(0)
  const [placedBet, setPlacedBet] = React.useState(0)
  const [typeBet, setTypeBet] = React.useState('')
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



  const [bet2, setBet2] = useState(0)

  useEffect(() => {

    axios.post(`/getpastbetinfo`,
      {
        "name": name
      })
      .then(res => {
        console.log(res.data)
        setBet2(res.data)
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
    setBetAmount(Math.min(Math.max(parseInt(e.target.value), 1)), credits);

  };
  const handlePlaceBet = (e) => {
    // Place bet logic here
    axios.post(`/addwager`, {
      "highlow": e.target.innerText === "Lower" ? -1 : 1,
      "name": name,
      "amount": betAmount
    })
      .then(res => {
        handleLoggedIn()
        setPlacedBet(1)
        setTypeBet(e.target.innerText)
        console.log(res.data)
      })
      .catch(e => {
        console.error(e)
      })
  };

  if (bet.active){
    return <BetView bet={bet} typeBet={typeBet} betAmount={betAmount} handleBetChange={handleBetChange} handlePlaceBet={handlePlaceBet} placedBet={placedBet}/>
  }
  else
  {
    return <BetResult bet={bet} bet2={bet2}/>
  }
  // return (

  //   <div className="container">
  //     <div className="row">
  //       <div className="col"></div>
  //       <div className="col-6  m-5">
  //         <div className="card">
  //           <div className="card-body">
  //             <h2 className="card-title text-center fs-2">{bet.name}</h2>
  //             <p className="card-text text-muted text-center">{bet.description}</p>

  //             <p className="card-text fs-4 text-center">Higher or Lower: <span className=" fw-bold">{bet.pivot}</span></p>
  //             {bet.active ?
  //               (placedBet ?

  //                 <>
  //                   <p className="card-text fs-4 text-center">Placed <span className=" fw-bold">{betAmount}</span> credit bet for <span className=" fw-bold">{typeBet}</span></p>
  //                   <div className="btn btn-dark card-text text-center d-flex align-items-center justify-content-center">
  //                     <a className="nav-link" href="/">Back Home</a>
  //                   </div>
  //                 </>
  //                 :
  //                 <>
  //                   <div className="form-group p-3">
  //                     <div className="row">
  //                       <label className="form-label col-sm-3 text-center p-1">Bet Tokens: </label>
  //                       <div className="col-lg-8">
  //                         <input
  //                           type="number"
  //                           className="form-control"
  //                           placeholder="Enter your bet amount"
  //                           value={betAmount}
  //                           onChange={handleBetChange}
  //                         />
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="text-center d-flex justify-content-around">
  //                     <button className="btn btn-lg btn-success" onClick={handlePlaceBet}>Higher</button>
  //                     <button className="btn btn-lg btn-danger" onClick={handlePlaceBet}>Lower</button>
  //                   </div>
  //                 </>) : (true ?

  //                   <>
  //                     <p className="card-text fs-4 text-center">{bet2.highlow === 1 ? "Higher" : "Lower"} <span className=" fw-bold">{bet2.actual}</span></p>
  //                   </>
  //                   : "")
  //             }
  //           </div>
  //         </div>
  //       </div>
  //       <div className="col"></div>

  //     </div>
  //   </div>
  // );
};

export default Bet;