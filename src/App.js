import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Login from "./components/Login";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';


function App() {

  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 p-0">
          <Navbar setToken={setToken}/>
          {token ? <Products/> : <Login token={token} setToken={setToken}/>} 
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
