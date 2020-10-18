import React, { Component } from "react";
import ProductCard from "./productCard";
import Pagination from "./pagination";
import Filter from "./filteration";
import Search from "./search";
import Range from "./range";

class Newshop extends Component {
  render() {
    const {
      products,
      activePage,
      pageSize,
      changePage,
      typesCategories,
      onClickFilter,
      activeFilter,
      searchValue,
      maxPrice,
      rangeHandler,
    } = this.props;

    /////Searching///////////////
    const searchValueWithoutSpace = searchValue.trim();
    searchedProducts = products;

    if (searchValueWithoutSpace !== "") {
      const searchedProd = [...products];
      const newProducts = searchedProd.map((p) => {
        let pNew = { ...p };
        pNew.name = pNew.name.toLowerCase();
        return pNew;
      });
      var searchedProducts = newProducts.filter((p) => {
        if (p.name.includes(searchValueWithoutSpace)) {
          return p;
        }
        return null;
      });
    }
    ///////////////////////////////////

    //////Filteration/////////////////
    var filteredProducts = products;
    if (activeFilter !== 0) {
      //First term in filter for selecting products that belong to specific type
      //second term in filter for selecting products whose price less than or equal the price in price range
      filteredProducts = searchedProducts
        .filter((p) => p.typeId === activeFilter && p.priceAFS <= maxPrice)
        .filter((p) => {
          if (p.name.includes(searchValueWithoutSpace)) {
            return p;
          }
          return null;
        });
    } else {
      filteredProducts = searchedProducts.filter((p) => {
        if (
          p.name.includes(searchValueWithoutSpace) &&
          p.priceAFS <= maxPrice
        ) {
          return p;
        }
        return null;
      });
    }
    /////////////////////////////////

    //Pagination
    const showedProducts = filteredProducts.slice(
      (activePage - 1) * pageSize,
      pageSize * activePage
    );
    return (
      <React.Fragment>
        <div>
          <Search searchValue={searchValue} onChange={this.props.onChange} />
        </div>
        <div className="row ">
          <div className="col-3 filterInShop">
            <Filter
              typesCategories={typesCategories}
              onClickFilter={onClickFilter}
              activeFilter={activeFilter}
            />
            <Range maxPrice={maxPrice} rangeHandler={rangeHandler} />
          </div>
          <div className="container col-9">
            <div className="row">
              {showedProducts.map((p) => (
                <ProductCard
                  addToCart={this.props.addToCart}
                  key={p.id}
                  id={p.id}
                  name={p.name}
                  sale={p.sale}
                  priceBS={p.priceBS}
                  priceAFS={p.priceAFS}
                  isInCart={p.isInCart}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-9">
            <Pagination
              pageSize={pageSize}
              countOfProduct={filteredProducts.length}
              activePage={activePage}
              changePage={changePage}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Newshop;
