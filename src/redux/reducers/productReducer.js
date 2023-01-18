let initialState = {
  products: [],
  productDetail: [],
};

function productReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_PRODUCT_SUCCESS":
      return { ...state, products: payload.data, productDetail: [] };
    case "GET_PRODUCTDETAIL_SUCCESS":
      return { ...state, productDetail: payload.data };
    default:
      return { ...state };
  }
}

export default productReducer;
