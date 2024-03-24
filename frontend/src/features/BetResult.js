
const BetResult = ({ bet, bet2 }) => {
    return (

        <div className="container">
            <div className="row">
                <div className="col"></div>
                <div className="col-6  m-5">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center fs-2">Results</h2>
                            <p className="card-text text-muted text-center">{bet.name}</p>
                            <p className="card-text text-center">The resulting number <span className=" fw-bold">{bet2.actual}</span> was <span className=" fw-bold">{bet2.highlow === 1 ? "Higher" : "Lower"} </span>than<span className=" fw-bold"> {bet.pivot} </span></p>
                            <div className="btn btn-dark card-text text-center d-flex align-items-center justify-content-center">
                                <a className="nav-link" href="/">Back Home</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col"></div>

            </div>
        </div>
    );
};

export default BetResult;