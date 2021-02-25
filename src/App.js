import "./App.css";
import ArticleList from "./components/ArticleList";
import AwesomeAnimals from "./components/AwesomeAnimals";
import LikeButton from "./components/LikeButton";
import LikeCounter from "./components/LikeCounter";
import Title from "./components/Title";

function App() {
  return (
    <main className="container my-5">
      <Title content="Some Simple Title" />
      <LikeCounter />
      <LikeButton />
      <AwesomeAnimals />
      <ArticleList />
    </main>
  );
}

export default App;
