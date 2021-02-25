import "./App.css";
import LikeButton from "./components/LikeButton";
import LikeCounter from "./components/LikeCounter";
import Title from "./components/Title";

function App() {
  return (
    <main className="container my-5">
      <Title content="Some Simple Title" />
      <LikeCounter />
      <LikeButton />
    </main>
  );
}

export default App;
