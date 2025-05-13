import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
 addToCart: (state, action) => {
  const existingItem = state.items.find(item => item.id === action.payload.id);
  
  // Agar item already cart mein hai, to uski quantity ko update karo
  if (existingItem) {
    existingItem.quantity += action.payload.quantity;
  } else {
    // Agar item cart mein nahi hai, to naya item add karo
    state.items.push({ ...action.payload, quantity: action.payload.quantity || 1 });
  }
},




    
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
increaseQuantity: (state, action) => {
  const item = state.items.find(item => item.id === action.payload);
  if (item) {
    item.quantity += 1;  
  }
},

decreaseQuantity: (state, action) => {
  const item = state.items.find(item => item.id === action.payload);
  if (item && item.quantity > 0) {
    item.quantity -= 1;  
  }
},
  resetCart: (state) => {
      state.items = [];  // Reset the cart items to an empty array
    },

    
  },
});
export const selectCartItemCount = (state) => state.cart.items.reduce((total, item) => total + item.quantity, 0);

export const selectCartItems = (state) => state.cart.items;
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity,resetCart  } = cartSlice.actions;
export default cartSlice.reducer;
