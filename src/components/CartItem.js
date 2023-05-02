import React from 'react';

const CartItem = ({item}) => {
  // Destructure item
  const {id, title, image, price, amount} = item
  return (
    <div>
      <div>
        {/* Image  */}
        <div>
          <img src={image} alt='item-image'/>
        </div>
      </div>
    </div>
  )
};

export default CartItem;
