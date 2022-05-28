
import Navbar from './components/Navbar';
import Transactionhistory from "./components/Transaction-history";
import TxDiagram from "./components/Tx-diagram";
import './App.css';

function App() {
  return (
    <div className="App">
      
      <header className="app-header">
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
