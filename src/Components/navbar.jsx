import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = (props) => {
  const { noOfProductsAtCart } = props;
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light "
      id="ftco-navbar"
    >
      <div className="container">
        <NavLink className="navbar-brand" to="index.html">
          Vegefoods
        </NavLink>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink to="/home" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/shop" className="nav-link">
              Shop
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/shoppingcart" className="nav-link">
              Shopping Cart
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contactus" className="nav-link">
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <span>
                <NavLink to="/admin" className="nav-link regLogBtn">
                  Admin Panel
                </NavLink>
              </span>
            </li>
            &nbsp; &nbsp;
            <li className="nav-item">
              <span>
                <NavLink to="/register" className="nav-link regLogBtn">
                  Register
                </NavLink>
              </span>
            </li>
            &nbsp; &nbsp;
            <li className="nav-item">
              <span>
                <NavLink to="/login" className="nav-link regLogBtn">
                  Login
                </NavLink>
              </span>
            </li>
            &nbsp; &nbsp;
            <li>
              <Link to="/shoppingcart" className="nav-link">
                <span
                  className={
                    noOfProductsAtCart === 0
                      ? "bagde badge-warning"
                      : "bagde badge-danger"
                  }
                >
                  <i
                    className="nav-item fas fa-shopping-cart"
                    style={{ color: "black" }}
                  ></i>
                  [{noOfProductsAtCart}]
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
