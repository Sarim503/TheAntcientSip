"use client"
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const AddToCartButton = ({ item, quantity }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addToCart({ ...item, quantity }));
  };

  return (
    <button
      onClick={handleClick}
      className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
    >
      + ADD TO CART
    </button>
  );
};

export default AddToCartButton;
