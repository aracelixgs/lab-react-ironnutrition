import './App.css';
//import { Card, Row, Col, Divider, Input, Button } from "antd";
import foods from "./foods.json";

function App() {

const foodArr = foods
//console.log(simpleFood)



  return (
    <div className="App">

      <h2>Food List</h2>

      <div>
        {foodArr.map((eachFood) => {
        return (
          <tbody key={eachFood.name}>
          <h3>{eachFood.name}</h3>
          <img
          src={eachFood.image}
          alt={eachFood.name}
          width="200px" />
          </tbody>
        )
      })}

      </div>
      
    </div>
  );
}

export default App;
