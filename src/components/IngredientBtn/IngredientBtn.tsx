import React from 'react';
import './IngredientBtn.css';
import DeleteBtn from "../DeleteBtn/DeleteBtn";

interface IngredientProps extends React.PropsWithChildren {
  name: string;
  img: string;
  count: number
  onBtnClick: React.MouseEventHandler;
  onDeleteBtnClick: () => void;
}

const IngredientBtn: React.FC<IngredientProps> = (props) => {

  const btnStyle: React.CSSProperties = {
    background: 'url(' + props.img + ') center, no-repeat',
    backgroundSize: 'contain',
  };

  return (
    <div className="IngredientBox">
      <label className="IngredientBtnLabel">
        <button className="IngredientBtn" style={btnStyle} onClick={props.onBtnClick}></button>
        {props.name}</label>
      <span>{props.count}</span>
     
      <DeleteBtn onBtnClick={props.onDeleteBtnClick}/>
    </div>
  );
};

export default IngredientBtn;