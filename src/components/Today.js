import React from "react";
import "./components.css";

const Today = () => {
    return (
        <div className="tx-square">
            <h3>Transactions</h3>
            <p className="tx-count">3</p>
            <p className="tx-timespan">TODAY</p>
        </div>
    )
}

export default Today;