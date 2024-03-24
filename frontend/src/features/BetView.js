
const BetView = ({ bet, typeBet, betAmount, handleBetChange, handlePlaceBet, placedBet}) => {
    return (

        <div className="container ">
          <div className="row">
            <div className="col"></div>
            <div className="col-6  m-5">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title text-center fs-2">{bet.name}</h2>
                  <p className="card-text text-muted text-center">{bet.description}</p>
    
                  <p className="card-text fs-4 text-center">Higher or Lower: <span className=" fw-bold">{bet.pivot}</span></p>
                    {(placedBet ?
    
                      <>
                        <p className="card-text fs-4 text-center">Placed <span className=" fw-bold">{betAmount}</span> credit bet for <span className=" fw-bold">{typeBet}</span></p>
                        <div className="btn btn-dark card-text text-center d-flex align-items-center justify-content-center">
                          <a className="nav-link" href="/">Back Home</a>
                        </div>
                      </>
                      :
                      <>
                        <div className="form-group p-3">
                          <div className="row">
                            <label className="form-label col-sm-3 text-center p-1">Bet Tokens: </label>
                            <div className="col-lg-8">
                              <input
                                type="number"
                                className="form-control"
                                placeholder="Enter your bet amount"
                                value={betAmount}
                                onChange={handleBetChange}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="text-center d-flex justify-content-around">
                          <button className="btn btn-lg btn-success" onClick={handlePlaceBet}>Higher</button>
                          <button className="btn btn-lg btn-danger" onClick={handlePlaceBet}>Lower</button>
                        </div>
                      </>)}
                </div>
              </div>
            </div>
            <div className="col"></div>
    
          </div>
        </div>
      );
};

export default BetView;