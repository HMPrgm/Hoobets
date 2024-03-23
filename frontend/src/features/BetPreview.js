import React from "react";

const BetPreview = ({bet}) => {
    return (
        <div className="bet-element" >
            <div className="bet-element-header"><span className="bet-element-name">{bet.name}</span><span className="bet-element-likes">Likes: {bet.likes}</span></div>
            <div className="bet-element-body">{bet.description}</div>
        </div>
      )
};

export default BetPreview;