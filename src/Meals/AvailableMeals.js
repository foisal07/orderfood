import { React, useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";
import Card from "../UI/Card";

export default function AvailableMeals() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://reactorderfood-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong...");
      }

      const data = await response.json();

      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }

      setLoadedMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);

  const mealsList = loadedMeals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  const loading = "Loading...";

  return (
    <>
      <section className={classes.meals}>
        <Card>
          <ul>{!isLoading && !error && mealsList}</ul>
          <ul>{isLoading && loading}</ul>
          <ul>{error && error}</ul>
        </Card>
      </section>
    </>
  );
}
