import "./App.css";
import { Navigation } from "./components/Navigation";
import { PostList } from "./components/PostList";

function App() {
  return (
    <div className="App">
      <Navigation />
      <PostList></PostList>
    </div>
  );
}

export default App;
