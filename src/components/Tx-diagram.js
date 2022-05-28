import React from "react";
import Monthly from "./Monthly";
import Daily from "./Daily";
import "./components.css";

const TxDiagram = () => {
    return (
        <div className="tx-last-year">
            <h3>Transactions Last Year</h3>
            <a href="./Monthly.js"><Monthly /></a>
            <a href="./Daily.js"><Daily /></a>
        </div>
    )
}

export default TxDiagram;