import "./App.css";
import React from "react";
import Greeter from "./Greeter";
import Calculator from './Calculator';
import Products from './Products';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>My App</h1>
      <div>
        <div>
          <span>
            [ <Link to="/">Home</Link> ]
          </span>
          <span>
            
            [ <Link to="/greeter">Greeter</Link> ]
          </span>
          <span>
            [ <Link to="/calculator">Calculator</Link> ]
          </span>
          <span>
            [ <Link to="/products">Products</Link> ]
          </span>
        </div>
        <Routes>
          <Route exact path="/" element={<div>Choose an option</div>}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/calculator" element={<Calculator />}></Route>
          <Route path="/greeter" element={<Greeter />}></Route>
          <Route path="*" element={<div>Invalid choice!</div>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
