import Ninjas from "./Ninjas";
import { useEffect, useState } from "react";
import AddNinja from "./AddNinja";
const App = () => {
  const [ninjas, setNinjas] = useState([
    { name: "Ryu", age: 30, belt: "black", id: 1 },
    { name: "Yoshi", age: 20, belt: "green", id: 2 },
    { name: "Crystal", age: 25, belt: "pink", id: 3 },
  ]);

  const addNinja = (ninja) => {
    ninja.id = Math.random();
    console.log(ninja);
    setNinjas([...ninjas, ninja]);
  };

  const deleteNinja = (id) => {
    const restNinja = ninjas.filter((ninja) => ninja.id !== id);
    setNinjas(restNinja);
  };

  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  useEffect(() => {
    console.log("Component Updated");
  }, [ninjas]);

  return (
    <div className="App">
      <h1>My first React app</h1>
      <AddNinja addNinja={addNinja} />
      <Ninjas ninjas={ninjas} deleteNinja={deleteNinja} />
    </div>
  );
};

export default App;
