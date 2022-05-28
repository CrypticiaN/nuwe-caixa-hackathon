import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Transactionhistory from "./components/Transaction-history";

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <Transactionhistory />
      </main>
    </div>
  );
}

export default App;
