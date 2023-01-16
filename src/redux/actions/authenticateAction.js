function login(id, password) {
  return async (dispatch, getState) => {
    // console.log("로그인 액션 성공");
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: { id, password },
    });
  };
}

function logout() {
  return async (dispatch, getState) => {
    // console.log("로그아웃 액션 성공");
    dispatch({
      type: "LOGOUT_SUCCESS",
    });
  };
}

export const authenticateAction = { login, logout };
