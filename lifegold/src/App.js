import logo from './central.png';
import './App.css';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar titulo="Menu Inicial" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Texto Inicial do site
        </p>
      </header>
      
    </div>
  );
}

export default App;
