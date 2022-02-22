import "./App.css";
import ReciepeList from "./components/ReciepeList";
import Logo from "./components/Logo";
import Image from "./components/Image";
import AddButton from "./components/AddButton";

function App() {
  return (
    <div className="App">
      <div className="logoContainer">
        <Logo />
      </div>
      <div className="container">
        <div>
          <Image />
        </div>
        <div className="recipes">
          <h2>Kitchen Recipes</h2>
          <ReciepeList />
          <AddButton />
        </div>
      </div>
    </div>
  );
}

export default App;
