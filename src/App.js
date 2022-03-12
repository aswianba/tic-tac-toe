import logo from './logo.svg';
import './App.css';
import Board from './components/Board';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <div className='board-container'>
        Player 1 : O
        Player 2 : X
        <Board />
      </div>
    </div>
  );
}

export default App;
