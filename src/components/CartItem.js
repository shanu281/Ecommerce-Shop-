import React, { useContext } from "react";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
const CartItem = ({ item }) => {
  // Destructure item
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);
  const { id, title, image, price, quantity } = item;
  return (
    <div className="flex  gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className=" w-full min-h-[150px] flex items-center gap-x-4">
        {/* Image  */}
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="item-image" />
        </Link>
        <div className="w-full flex flex-col">
          {/* Title and delete icon  */}
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            <div
              onClick={() => removeFromCart(id)}
              className="cursor-pointer text-xl"
            >
              <IoMdClose className="text-grey-500 hover:text-red-500 transition " />
            </div>
          </div>
          {/* Quantity and Price */}
          <div className=" h-[36px] gap-x-2 flex text-sm ">
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
              <div onClick={() => decreaseAmount(id)} className="flex-1 h-full flex justify-center items-center cursor-pointer">
                <IoMdRemove />
              </div>
              <div className="h-full flex justify-center items-center px-2 ">
                {quantity}
              </div>
              <div onClick={() => increaseAmount(id)} className="flex-1 h-full flex justify-center items-center cursor-pointer">
                <IoMdAdd />
              </div>
            </div>
            <div className="flex-1 flex items-center justify-around">
              $ {price}
            </div>
            <div className="flex-1 flex justify-end items-center text-primary font-medium">
              $ {`${parseFloat(price * quantity).toFixed(2)}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
