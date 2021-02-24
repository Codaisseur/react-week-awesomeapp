import "./App.css";
import Pokemon from "./components/Pokemon";

import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <main>
        <Title content="Some Simple Title" />
        <Pokemon />
      </main>
    </div>
  );
}

export default App;
