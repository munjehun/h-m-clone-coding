import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import PrivateRoute from "./routes/PrivateRoute";

// 1. 전체 상품 페이지
// 2. 로그인 페이지
// 3. 상품 상세 페이지

// 전체 상품 페이지에서는 전체 상품을 볼 수 있다.
// 로그인 버튼을 누르면 로그인 페이지가 나온다.
// 상품 디테일을 눌렀으나, 로그인이 안됐을 경우, 로그인 페이지가 먼저 나온다.
// 로그인이 돼있을 경우, 상품 디테일 페이지를 볼 수 있다.
// 로그아웃 버튼을 누르면 로그아웃이 된다.
// 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다. 다시 로그인 페이지가 보인다.
// 로그인을 하면 로그아웃이 보이고, 로그아웃을 하면 로그인이 보인다.
// 상품을 검색할 수 있다.

function App() {
  const [authenticate, setAuthenticate] = useState(false);

  console.log(authenticate);

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
