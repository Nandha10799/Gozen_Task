import React, { useState, useEffect } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Dropdown,Badge } from "react-bootstrap";
import{ FaShoppingCart } from 'react-icons/fa';
import axios from "axios";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    }).then((res) => {
        console.log(res.data);
        setData(res.data);
      }).catch((err) => console.log(err)).finally(() => setLoading(false));
  }, []);
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="container">
            <div className="row">
              <div className="col-3 ml-auto mt-3">
                <Dropdown alignRight>
                  <Dropdown.Toggle variant="success">
                    <FaShoppingCart color="white" fontSize='20px'/>
                    <Badge bg='none'>{0}</Badge>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="mt-1 bg-secondary" style={{minWidth: 370}}>
                    <span style={{padding: 10}}>Cart is Empty!</span>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
          <div className="products-container">
            {loading && (
              <div>
                <h1>Loading...</h1>
              </div>
            )}
            {data.map((product)=> ( 
              <div key={product.id} className="product_card">
                <div><img src={product.image} className="w-100"/></div>
                <div className="card-description mt-2">
                    <h6>{product.title}</h6>
                    <h6>{`Price: ${product.price}`}</h6>
                    <h6>{`Category: ${product.category}`}</h6>
                    <button className="btn btn-info">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
