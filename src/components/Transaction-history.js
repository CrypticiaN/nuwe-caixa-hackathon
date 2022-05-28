import React from "react";
import LastMonth from "./Last-month";
import Today from "./Today";


const Transactionhistory = () => {
    return (
        <div className="tx-container">
            <h2>Transactions history</h2>
            <p className="phrase">These are your monthly and daily actions.</p>
            <div className="squares-container">
                <div className="tx-square">
                    <LastMonth />
                    <Today />  
                </div>
            </div>
           
            
        </div>
    )
}

export default Transactionhistory;