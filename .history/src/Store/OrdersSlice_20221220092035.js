import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  foodItems: [],
  orderBtnStatus: true,
  checkoutStatus: false,
};
const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setCheckoutStatusWithUrl(state, action) {
      if (
        state.checkoutStatus === true &&
        window.location.href != "/checkout/map"
      ) {
        state.checkoutStatus = false;
      } else if (
        window.location.href === "/checkout/map" &&
        checkoutStatus === true
      ) {
        state.checkoutStatus = true;
      }
    },
    setCheckoutStatusStatic(state, action) {
      state.checkoutStatus = action.payload;
    },

    getOrders: (state, action) => {
      state.foodItems.push(action.payload.orderedItems);
      state.orderBtnStatus = action.payload.orderBtnStatus;
    },
    deleteOrder: (state, action) => {
      state.foodItems.splice(action.payload.index, 1);
      state.orderBtnStatus = action.payload.orderButtonStatus;
    },
    multipleItemsHandler: (state, action) => {
      let index = action.payload;
      state.foodItems[index].counter += 1;
      state.foodItems[index].multipleItemsPrice =
        state.foodItems[index].price * state.foodItems[index].counter;
    },
  },
});
export const orderedItems = (state) => state.orderedFood.foodItems;
export const orderBtnStatus = (state) => state.orderedFood.orderBtnStatus;
export const checkoutStatus = (state)=> state.orderedFood.checkoutStatus;
export const { getOrders, deleteOrder, multipleItemsHandler, setCheckoutStatusStatic, set } =
  ordersSlice.actions;
export default ordersSlice.reducer;
