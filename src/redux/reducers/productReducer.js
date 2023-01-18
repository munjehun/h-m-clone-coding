import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  products: [],
  productDetail: [],
};

// function productReducer(state = initialState, action) {
//   let { type, payload } = action;
//   switch (type) {
//     case "GET_PRODUCT_SUCCESS":
//       return { ...state, products: payload.data, productDetail: [] };
//     case "GET_PRODUCTDETAIL_SUCCESS":
//       return { ...state, productDetail: payload.data };
//     default:
//       return { ...state };
//   }
// }

// export default productReducer;

//createSlice는 객체를 매개변수로 받는다. 그 객체에는 반드시 3개의 필드(name, initailState, reducers)를 포함한다.
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getAllproducts(state, action) {
      state.products = action.payload.data;
      state.productDetail = [];
      //...state 없이 바꾸고 싶은 값만 코딩
    },
    getProductDetail(state, action) {
      state.productDetail = action.payload.data;
    },
  },
});

console.log(productSlice);

export const productActions = productSlice.actions;
export default productSlice.reducer; //☢️ reducer's' 아님 주의!
