import logo from './central.png';
import './App.css';
import MenuTopo from './components/MenuTopo';

function App() {
  return (
    <div className="App">
      <MenuTopo titulo="Menu Inicial" />
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
