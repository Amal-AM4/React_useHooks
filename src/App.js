import axios from "axios";
import useQuery from "./useQuery";

function App() {
  const { response, loading, error } = useQuery(
    axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching meal 😢</p>;

  // Safely get the first meal
  const meal = response && response.meals && response.meals[0];

  if (!meal) {
    return <p>No meal data available</p>;
  }

  return (
    <div className="App">
      <h2>{meal.strMeal}</h2>
      {meal.strMealThumb ? (
        <img src={meal.strMealThumb} alt={meal.strMeal} width="400" />
      ) : (
        <p>No image available</p>
      )}
      <p><strong>Category:</strong> {meal.strCategory}</p>
      <p><strong>Area:</strong> {meal.strArea}</p>
    </div>
  );
}

export default App;
