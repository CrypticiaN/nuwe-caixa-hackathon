import React from "react";
import LastMonth from "./Last-month";
import Today from "./Today";


const Transactionhistory = () => {
    return (
        <div className="tx-container">
            <h2>Transactions history</h2>
            <p className="phrase">These are your monthly and daily actions.</p>
            <div className="tx-fields">
                <LastMonth />
                <Today />  
            </div>
            
        </div>
    )
}

export default Transactionhistory;