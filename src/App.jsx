import "./App.css";
import foodsJson from "./foods.json";
import { useState } from "react";
import FoodBox from "./components/FoodBox";

function App() {
  
  const [foods, setFoods] = useState([...foodsJson]);
  console.log(...foodsJson);

  const handleDelete = (id) => {
    setFoods(foods.filter((f) => f.id !== id));
  };


  const listFood = foods.map((f) => (
    <FoodBox key={f.id} onDelete={handleDelete} food={f} />
  ));

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <ul>{listFood}</ul>
    </div>
  );
}

export default App;