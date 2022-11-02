import React, {useState} from 'react';
import './App.css';
import meatImg from './assets/meat.png';
import cheeseImg from './assets/cheese.png';
import saladImg from './assets/salad.png';
import baconImg from './assets/bacon.png';
import IngredientBtn from "./components/IngredientBtn/IngredientBtn";
import {Ingredient} from "./types";
import Price from "./components/Price/Price";


const INGREDIENTS: Ingredient[] = [
  {name: 'Meat', price: 80, image: meatImg, id: 0},
  {name: 'Cheese', price: 50, image: cheeseImg, id: 1},
  {name: 'Salad', price: 10, image: saladImg, id: 2},
  {name: 'Bacon', price: 60, image: baconImg, id: 3},
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
      }: elem;
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

              {INGREDIENTS.map((element) => (
                <IngredientBtn
                  name={element.name}
                  img={element.image}
                  key={element.id}
                  onBtnClick={() => changeCount(element.name)}
                  count={ingredients[element.id].count}
                  onDeleteBtnClick={() => {deleteCount(element.name)}}/>
              ))}



            </div>

            <div className="burger">
              <div className="Burger">
                <div className="BreadTop">
                  <div className="Seeds1"></div>
                  <div className="Seeds2"></div>
                </div>


                <div className="Salad"></div>
                <div className="Cheese"></div>
                <div className="Bacon"></div>
                <div className="Meat"></div>
                <div className="BreadBottom"></div>

              </div>

              <Price price={getPrice()}/>
            </div>
          </div>
        );
    }


export default App;
