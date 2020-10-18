import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { id, sale, name, priceBS, priceAFS, addToCart, isInCart } = props;

  return (
    <div className="product">
      <Link to={"/card/" + id} className="img-prod">
        <img
          className="img-fluid"
          src="product-1.jpg"
          alt="Colorlib Template"
        />
        <span className="status">{sale}%</span>
        <div className="overlay"></div>
      </Link>
      <div className="text py-3 pb-4 px-3 text-center center-div">
        <h3>
          <a href="kkk">{name}</a>
        </h3>
        <div className="d-flex">
          <div className="pricing">
            <p className="price">
              <span className="mr-2 price-dc">${priceBS}</span>
              <span className="price-sale">${priceAFS}</span>
            </p>
          </div>
        </div>
        <div className="bottom-area d-flex px-3">
          <div className="m-auto d-flex">
            <p className="add-to-cart d-flex justify-content-center align-items-center text-center">
              <span>
                <i className="fas fa-bars"></i>
              </span>
            </p>
            <p className="buy-now d-flex justify-content-center align-items-center mx-1">
              <span onClick={() => addToCart(id)} className=" pointer">
                <i
                  className={
                    isInCart ? "fas fa-cart-plus gray" : "fas fa-cart-plus"
                  }
                ></i>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
