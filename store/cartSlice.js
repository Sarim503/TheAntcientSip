import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
   addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (!existingItem) {
        state.items.push({ ...action.payload, quantity: action.payload.quantity || 1 }); // Ensure quantity is set correctly
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


    
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
