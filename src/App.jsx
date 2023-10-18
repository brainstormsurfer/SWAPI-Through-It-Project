
// import Game from "./components/Game";
// import Welcome from "./components/Welcome";
// import GameOverModal from "./components/GameOverModal";
import Game from './components/Game';
import GameOverModal from './components/GameOverModal';
import './styles/welcome.css'

function App() {
  
  return (
    <body className="background-void">
        {/* <Welcome /> */}
        <Game />       
        <GameOverModal />  
    </body>
  );
}

export default App;
