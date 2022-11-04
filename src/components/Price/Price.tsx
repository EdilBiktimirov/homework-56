import React from 'react';

interface CountProps extends React.PropsWithChildren{
  price: number;
}

const Price: React.FC<CountProps> = (props) => {
  return (
    <div>
      <span><b>Price:</b> {props.price}</span>
    </div>
  );
};

export default Price;