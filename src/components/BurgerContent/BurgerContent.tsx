import React from 'react';
import './BurgerContent.css'

interface BurgerContentProps extends React.PropsWithChildren {
 burgerClass: string;
}

const BurgerContent: React.FC<BurgerContentProps> = (props) => {
  return (
    <div className={props.burgerClass}>
    </div>
  );
};

export default BurgerContent;