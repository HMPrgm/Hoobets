import React from "react";
import '../styles/BetPreview.css'

const BetPreview = ({bet}) => {
    return (
        <div className="bet-main"> 
            <div className="bet-element" >
                <div className="bet-element-header bet-element-element"><span className="bet-element-name">{bet.name}</span><span className="bet-element-likes bet-element-element">Likes: {bet.likes}</span></div>
                <div className="bet-element-body bet-element-element">{bet.description}</div>
            </div>
            <div className="bet-element" >
                <div className="bet-element-img bet-element-element"><img src={bet.image}></img></div>
                <div className="bet-element-btn bet-element-element"><a href="/bets/">Bet</a></div>
            </div>
        </div>
      )
};

export default BetPreview;