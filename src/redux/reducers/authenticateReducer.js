let initialState = {
  id: null,
  password: null,
  authenticate: false,
};

function authenticateReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case "LOGIN_SUCCESS":
      // console.log("로그인 리듀서 성공");
      return {
        ...state,
        id: payload.id,
        password: payload.password,
        authenticate: true,
      };
    case "LOGOUT_SUCCESS":
      // console.log("로그아웃 리듀서 성공");
      return {
        ...state,
        id: null,
        password: null,
        authenticate: false,
      };
    default:
      return { ...state };
  }
}

export default authenticateReducer;
