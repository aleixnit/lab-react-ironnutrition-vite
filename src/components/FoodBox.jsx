// Your code here
export default function FoodBox({food, onDelete}) {

return (
    <div key={food.id}>
      <p>{food.name}</p>

      <img style={{width: '250px'}} src={food.image} />

      <p>Calories: CALORIES</p>
      <p>Servings SERVINGS</p>

      <p>
        <b>Total Calories: SERVINGS * CALORIES </b> kcal
      </p>

      <button onClick={() => onDelete(food.id)}>Delete</button>
    </div>
);
    }