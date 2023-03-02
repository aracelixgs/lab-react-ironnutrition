import './App.css';
import { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button } from "antd";
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';


function App() {
  const [food, setFood] = useState(foods);
  const [foodToDisplay, setFoodToDisplay] = useState(foods)

const addNewFood = (newFood) => {
  console.log("intentandoinvocar");

  setFood([...food, newFood]);
  setFoodToDisplay([...foodToDisplay, newFood])
}


const filterFood = (search) => {
  const filteredFood = foods.filter((eachFood) => {
    if(eachFood.name.includes(search)) {
      return true;
    } else {
      return false;
    }
  });
  setFoodToDisplay(filteredFood)
}




  return (
    <div className="App">

    <h2>Add Food Entry</h2>
    <AddFoodForm addNewFood={addNewFood} />

    <h2>Search</h2>
    <Search filterFood={filterFood} />




      <h2>Food List</h2>

      {food.map((eachFood) => {
        return (
        <FoodBox food={eachFood} key={eachFood.name} />
        )
      })}
    </div>
  );
}

export default App;
