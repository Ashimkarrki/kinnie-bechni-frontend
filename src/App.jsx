import { Routes, Route, useLocation } from "react-router-dom";
import "./Style/main.scss";
import Signup from "./Pages/Signup";
import Category from "./Components/Category";
import Login from "./Pages/Login";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import SingleProduct from "./Components/SingleProduct";
import Footer from "./Components/Footer";
import { useState } from "react";
function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  let location = useLocation();
  return (
    <div className="App">
      {location.pathname === "/signup" || location.pathname === "/login" ? (
        ""
      ) : (
        <>
          <Navbar
            setIsSideBarOpen={setIsSideBarOpen}
            isSideBarOpen={isSideBarOpen}
          />
          <Category isSideBarOpen={isSideBarOpen} />
        </>
      )}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/product/:category/:id"
          element={<SingleProduct />}
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
