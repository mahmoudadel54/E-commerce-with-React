import React from "react";
import Product from "./productForCart";

const ShoppingCart = (props) => {
  const {
    products,
    OnhandlerReset,
    OnhandlerAdd,
    OnhandlerMinus,
    OnhandlerDelete,
  } = props;
  return (
    <div>
      <h1 className="row">Shopping Cart</h1>
      {products.length === 0 ? (
        <div
          className="alert alert-danger row"
          style={{
            height: "60px",
            fontSize: "20px",
            marginTop: "30px",
            marginLeft: "25%",
            marginRight: "25%",
          }}
          role="alert"
        >
          There is No products in your Cart
        </div>
      ) : (
        <div>
          <div className="row">
            <button
              onClick={OnhandlerReset}
              className="btn btn-secondary sm m-2"
            >
              Reset
            </button>
            <button
              onClick={() => console.log("checkout")}
              className="btn btn-secondary sm m-2"
            >
              Checkout
            </button>
          </div>

          <div className="row">
            <Product
              products={products}
              OnhandlerAdd={OnhandlerAdd}
              OnhandlerMinus={OnhandlerMinus}
              OnhandlerDelete={OnhandlerDelete}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;