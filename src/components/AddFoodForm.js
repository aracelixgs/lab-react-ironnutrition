import { Divider, Input } from 'antd';
import { useState } from 'react';

function AddFoodForm(props) {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);


    const handleName = (event) => {
        setName(event.target.value.toUpperCase())
    }

    const handleImage = (event) => {
        setImage(event.target.value)
    }

    const handleCalories = (event) => {
        setCalories(event.target.value)
    }

    const handleServings = (event) => {
        setServings(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        //console.log("Intento info")

        const newFood = {
            name: name,
            image: image,
            calories: calories,
            servings: servings
        }
       // console.log(newFood)
       props.addNewFood(newFood)
    }


  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label htmlFor="name">Name</label>
      <Input type="text" value={name} onChange={handleName} />

      <label htmlFor="image">Image</label>
      <Input type="text" value={image} onChange={handleImage} />

      <label htmlFor="calories">Calories</label>
      <Input type="number" name="calories" value={calories} onChange={handleCalories}/>

      <label htmlFor="servings">Servings</label>
      <Input type="number" name="servings" value={servings} onChange={handleServings}/>

      {/* <Button onClick={handleSubmit}>Create</Button> */}
      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;