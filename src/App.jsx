import "./App.css";
import Greeting from "./Greeting";

function App() {
  const animals = ["Lion", "Cat", "Lizard", "Pig", "Dog"];
  return (
    <>
      <h1>Hello World</h1>
      <Greeting />
      <h2>Himena</h2>
      <h1>Animals: </h1>
      <ul>
        {animals.map((animal) => {
          return <li key={animal}>{animal}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
