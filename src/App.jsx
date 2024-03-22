import './App.css'
import GameCarousel from './components/game_carousel/game_carousel';
import Cards_Section from './components/cards_section/cards_section';
import GameContainer from './components/game_container/game_container';
import GettingStart from './components/getting_start/getting_start';
function App() {
  return (
    <div>
      <GameCarousel />
      <Cards_Section />
      <GameContainer />
      <GettingStart />
    </div>
  )
}

export default App
