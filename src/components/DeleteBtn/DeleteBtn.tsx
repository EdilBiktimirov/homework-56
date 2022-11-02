import React from 'react';

interface DeleteBtnProps extends React.PropsWithChildren  {
  onBtnClick: React.MouseEventHandler
}

const DeleteBtn: React.FC<DeleteBtnProps> = (props) => {
  return (
    <div>
      <button className="DeleteBtn" onClick={props.onBtnClick}>Delete</button>
    </div>
  );
};

export default DeleteBtn;