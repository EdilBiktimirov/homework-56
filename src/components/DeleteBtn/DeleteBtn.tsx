import React from 'react';
import './DeleteBtn.css';

interface DeleteBtnProps extends React.PropsWithChildren  {
  onBtnClick: React.MouseEventHandler
}

const DeleteBtn: React.FC<DeleteBtnProps> = (props) => {

  return (
    <div>
      <button className="DeleteBtn" onClick={props.onBtnClick}></button>
    </div>
  );
};

export default DeleteBtn;