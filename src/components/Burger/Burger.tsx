import React from 'react';
import BurgerContent from "../BurgerContent/BurgerContent";
import {Ingredients} from "../../types";
import './Burger.css';

interface BurgerProps extends React.PropsWithChildren {
  ingredientArray: Ingredients[];
}

const Burger: React.FC<BurgerProps> = (props) => {
  const burgerComponentsClasses: string[] = [];

  for (let i = 0; i < props.ingredientArray.length; i++) {
    for (let k = 0; k < props.ingredientArray[i].count; k++) {
      burgerComponentsClasses.push(props.ingredientArray[i].name);
    }
  }

  const getRandomInt = () => {
    return Math.floor(Math.random() * 10000000);
  }

  return (
      <div className="Burger">
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
        {burgerComponentsClasses.map((element) => (
          <BurgerContent burgerClass={element} key={getRandomInt()}/>
        ))}
        <div className="BreadBottom"></div>
      </div>
  );
};

export default Burger;