import React from "react";
import '../styles/BetPreview.css'

const BetPreview = ({ bet, loggedIn }) => {
    return (
        // <div className="bet-main"> 
        //     <div className="bet-element" >
        //         <div className="bet-element-header bet-element-element"><span className="bet-element-name">{bet.name}</span><span className="bet-element-likes bet-element-element">Likes: {bet.likes}</span></div>
        //         <div className="bet-element-body bet-element-element">{bet.description}</div>
        //     </div>
        //     <div className="bet-element" >
        //         <div className="bet-element-img bet-element-element"><img src={bet.image}></img></div>
        //         <div className="bet-element-btn bet-element-element"><a href={"/bets/" + bet.name}>Bet</a></div>
        //     </div>
        // </div>
        <div class="container">
            <div class="row">
                <div className="col "></div>
                <div className="card m-5 col-lg-8" style={{ borderRadius: 0 }}>
                    <div className="card-body">
                        <h2 className="card-title text-center">{bet.name}</h2>
                        <p className="card-text text-center text-muted">{bet.description}</p>
                        <p className="card-text text-center"><strong>Start Date:</strong> {new Date(bet.start).toLocaleString()}</p>
                        <p className="card-text text-center"><strong>End Date:</strong> {new Date(bet.end).toLocaleString()}</p>
                        {loggedIn ?
                            <p className="card-text text-center"><a className="btn btn-dark btn-lg" href={"/bets/" + bet.name}>{bet.active ? 'Bet' : 'Results'}</a></p> : ""
                        }
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
};

export default BetPreview;