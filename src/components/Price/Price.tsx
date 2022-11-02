import React from 'react';

interface CountProps extends React.PropsWithChildren{
  price: number;
}

const Price: React.FC<CountProps> = (props) => {
  return (
    <div>
      <span>Price: {props.price}</span>
    </div>
  );
};

export default Price;