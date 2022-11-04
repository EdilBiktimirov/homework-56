import React, {useState} from 'react';
import './App.css';
import meatImg from './assets/meat.png';
import cheeseImg from './assets/cheese.png';
import saladImg from './assets/salad.png';
import baconImg from './assets/bacon.png';
import IngredientField from "./components/IngredientField/IngredientField";
import {Ingredient} from "./types";
import Price from "./components/Price/Price";
import Burger from "./components/Burger/Burger";

const INGREDIENTS: Ingredient[] = [
  {name: 'Meat', price: 80, image: meatImg},
  {name: 'Cheese', price: 50, image: cheeseImg},
  {name: 'Salad', price: 10, image: saladImg},
  {name: 'Bacon', price: 60, image: baconImg},
];

function App() {

  const [ingredients, setIngredients] = useState([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Salad', count: 0},
    {name: 'Bacon', count: 0},
  ]);

  const changeCount = (name: string) => {
    setIngredients(prev => prev.map(elem => {
      return elem.name === name ? {
        ...elem,
        count: elem.count + 1,
      } : elem;
    }))
  };

  const deleteCount = (name: string) => {
    setIngredients(prev => prev.map(elem => {
      return elem.name === name && elem.count !== 0 ? {
        ...elem,
        count: elem.count - 1,
      } : elem;
    }))
  }

  const getPrice = () => {
    let total = 30
    for (let i = 0; i < ingredients.length; i++) {
      total = ingredients[i].count * INGREDIENTS[i].price + total;
    }
    return total;
  };

  return (
    <div className="App">
      <div className="ingredients">
        {INGREDIENTS.map((element, index) => {
          return (
            <IngredientField
              name={element.name}
              img={element.image}
              key={element.name + element.price + index}
              onBtnClick={() => changeCount(element.name)}
              count={ingredients[index].count}
              onDeleteBtnClick={() => {
                deleteCount(element.name)
              }}/>
          );
        })}
      </div>
      <div className="burger">
        <Burger ingredientArray={ingredients}/>
        <Price price={getPrice()}/>
      </div>
    </div>
  );
}

export default App;
