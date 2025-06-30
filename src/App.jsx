import './App.css'
import PokemonCard  from "./components/PokemonCard.jsx";

function App() {
  return (
    <div>
      <h1>Pokemon</h1>
        <PokemonCard name="jigglypuff"></PokemonCard>
        <PokemonCard name="ditto"></PokemonCard>
    </div>
  )
}

export default App
