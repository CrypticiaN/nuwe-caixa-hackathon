import './App.css';
import Navbar from './components/Navbar';
import Transactionhistory from "./components/Transaction-history";
import TxDiagram from "./components/Tx-diagram";

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <Transactionhistory />
        <TxDiagram />
      </main>
    </div>
  );
}

export default App;
