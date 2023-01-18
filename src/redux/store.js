import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";
import rootReducer from "./reducers";
// rootReducer는 임의로 정한 이름!
// /index.js는 기본파일이므로 굳이 index.js는 안해줘도 된다.

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
