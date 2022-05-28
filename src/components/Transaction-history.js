import React from "react";
import LastMonth from "./Last-month";
import Today from "./Today";

const Transactionhistory = () => {
    return (
        <div className="Tx-container">
            <h2>Transactions history</h2>
            <p>These are your monthly and daily actions.</p>
            <LastMonth />
            <Today />
        </div>
    )
}

export default Transactionhistory;