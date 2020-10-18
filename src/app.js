//React component import
import React, { Component } from "react";
import axios from "axios";
//for routing
import { Route, Switch, Redirect } from "react-router-dom";

import { toast } from "react-toastify";
//from files
import Register from "./Components/register";
import Login from "./Components/login";
import ShoppingCart from "./Components/ShoppingCart";
import NavBar from "./Components/navbar";
import Newshop from "./Components/newshop.jsx";
import About from "./pages/about";
import contactUs from "./pages/contactus";
import Home from "./pages/home";
import notfound from "./pages/notfoundpage";
import Admin from "./Components/admin";
import ProductForm from "./Components/productform";
import Footer from "./Components/footer";
import Card from "./Components/card";

class App extends Component {
  state = {
    products: [],
    type: [],
    pageSize: 6,
    activePage: 1,
    activeFilter: 0,
    searchValue: "",
    maxPrice: 100,
  };

  async componentDidMount() {
    //fetch the data
    const { data: products } = await axios.get(
      " http://localhost:3000/products"
    );
    const { data: type } = await axios.get(" http://localhost:3000/type");
    this.setState({ products });
    this.setState({ type });
  }

  handlePost = async () => {
    const type = {
      name: "test",
    };
    //post data
    await axios
      .post("http://localhost:3000/type", type)
      .then((res) => console.log(res.data));
  };

  handelerDelete = (id) => {
    //to make any edit there are 3 steps
    //1. Clone state
    const products = [...this.state.products];
    //console.log("delete",id)

    //2.Edit==>using Filter function in array==>
    //Determine the index of element that needed to delete==>
    //using splice function     arrayName.splice(index that start with, no of element that will remove)

    const obj = products.filter((p) => p.id === id)[0];
    const indexObj = products.indexOf(obj);
    //deep clone
    products[indexObj] = { ...products[indexObj] };
    products[indexObj].isInCart = false;
    products[indexObj].count = 0;
    //3.set State
    this.setState({ products: products });
  };

  handlerAdd = (id) => {
    ///to make change in object inside array we must make deep clone
    //1. Clone
    //step 1 -
    const products = [...this.state.products];
    //step 2- Using Id ==> catch object
    const obj = products.filter((p) => p.id === id)[0];
    //step 3-Using object to know its index
    const indexObj = products.indexOf(obj);
    //step 4-Deep Clone
    products[indexObj] = { ...products[indexObj] };
    //2. Edit
    products[indexObj].count++;
    //3. setState
    this.setState({ products: products });
  };

  handelerMinus = (id) => {
    ///to make change in object inside array we must make deep clone

    //1. Clone
    //step 1 -
    const products = [...this.state.products];
    //step 2- Using Id ==> catch object
    const obj = products.filter((p) => p.id === id)[0];
    //step 3-Using object to know its index
    const indexObj = products.indexOf(obj);
    //step 4-Deep Clone
    products[indexObj] = { ...products[indexObj] };
    //2. Edit
    if (products[indexObj].count >= 1) {
      products[indexObj].count--;
    }
    //3. setState
    this.setState({ products: products });
  };

  handleReset = () => {
    //1. Clone
    const products = [...this.state.products];
    //2.Edit
    const newProd = products.map((p) => {
      p.count = 0;
      return p;
    });
    //3.setState
    this.setState({ products: newProd });
  };

  addToCart = (id) => {
    //clone
    const products = [...this.state.products];
    const obj = products.filter((p) => p.id === id)[0];
    const indexObj = products.indexOf(obj);
    //deep clone
    products[indexObj] = { ...products[indexObj] };
    //edit
    products[indexObj].isInCart = !obj.isInCart;
    if (products[indexObj].isInCart === true) {
      products[indexObj].count = 1;
    } else {
      products[indexObj].count = 0;
    }
    //set state
    this.setState({
      products: products,
    });
  };

  //function that handle change pages if i click on any page no. on pagination

  handlePagination = (e) => {
    //clone
    let activePage = { ...this.state.activePage };
    //edit
    activePage = e;
    //set state
    this.setState({ activePage: activePage });
  };
  handleChangeInFilter = (id) => {
    this.setState({ activeFilter: id, activePage: 1 });
  };

  handleChangeSearch = (searchValue) => {
    this.setState({ searchValue: searchValue.target.value.toLowerCase() });
  };

  rangeHandler = (e) => {
    this.setState({ maxPrice: e.target.value });
  };
  handleAddProduct = (product) => {
    //Clone
    const products = [...this.state.products];
    //Edit
    products.push(product);
    //Set State
    this.setState({ products });
  };
  handleEditProduct = (product) => {
    //Clone
    const products = [...this.state.products];
    const index = products.indexOf(products.find((p) => p.id === product.id));
    //Edit
    products[index] = product;
    //Set State
    this.setState({ products });
    console.log("edit");
  };

  //Optimistic  Update
  handleDeleteProduct = async (product) => {
    //Copy Original data
    const originalProducts = [...this.state.products];
    //delete form state
    //----state----
    //1.clone
    const products = [...this.state.products];
    //2.Edit
    const obj = products.find((p) => p.id === product.id);
    const indexObj = products.indexOf(obj);
    //Using index===> DELETE
    products.splice(indexObj, 1);
    //3.set State
    this.setState({ products: products });
    //Backend
    try {
      //delete from backend
      await axios.delete("kjkjkjhttp://localhost:3000/products/" + product.id);
    } catch (error) {
      if (error.request.status === 404) {
        //1. Expected Error
        toast.error("The product already deleted");
        console.log(error);
      } else {
        ///2. UnExpected Error
        toast.error("Something went wrong!!");
      }
    }

    //Original State ---> Call backend and get correct data
    // this.setState({products:originalProducts})
    const { data } = await axios.get("http://localhost:3000/products/");
    this.setState({ products: data });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          noOfProductsAtCart={
            this.state.products.filter((p) => p.isInCart === true).length
          }
        />
        <main>
          <Switch>
            <Route path="/about/:id?" component={About} />
            <Route path="/contactus" component={contactUs} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route
              path="/card/:id"
              render={(props) => <Card {...props} addToCart={this.addToCart} />}
            />
            <Route
              path="/admin"
              render={(props) => (
                <Admin
                  {...props}
                  products={this.state.products}
                  types={this.state.type}
                  onDeleteProduct={this.handleDeleteProduct}
                />
              )}
            />
            <Route
              path="/productForm/:id"
              render={(props) => (
                <ProductForm
                  {...props}
                  onAddProduct={this.handleAddProduct}
                  onEditProduct={this.handleEditProduct}
                  types={this.state.type}
                />
              )}
            />

            {/*exact to match the same content of path not (contain)*/}
            <Route
              path="/shop"
              render={(props) => (
                <Newshop
                  {...props}
                  products={this.state.products}
                  pageSize={this.state.pageSize}
                  activePage={this.state.activePage}
                  typesCategories={this.state.type}
                  activeFilter={this.state.activeFilter}
                  maxPrice={this.state.maxPrice}
                  searchValue={this.state.searchValue}
                  addToCart={this.addToCart}
                  changePage={this.handlePagination}
                  onClickFilter={this.handleChangeInFilter}
                  onChange={this.handleChangeSearch}
                  rangeHandler={this.rangeHandler}
                />
              )}
            />
            <Route
              path="/shoppingcart"
              render={() => (
                <ShoppingCart
                  products={this.state.products.filter(
                    (p) => p.isInCart === true
                  )}
                  OnhandlerReset={this.handleReset}
                  OnhandlerMinus={this.handelerMinus}
                  OnhandlerAdd={this.handlerAdd}
                  OnhandlerDelete={this.handelerDelete}
                />
              )}
            />
            <Route path="/notfound" component={notfound} />
            <Route path="/home" component={Home} />

            {/**to make redirect, it must be component for the redirected page+path */}
            <Redirect from="/" exact to="/home" />
            <Redirect to="/notfound" />
          </Switch>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}
export default App;

//////////////////////////////////
///How to render list from array if array is empty
//     state = {
//         colors: []//["red","green","blue"]
//      }

//     render() {
//         let colorDom;
//         if (this.state.colors.length===0) {
//             colorDom=<div>No Color in List</div>
//         }
//         else{
//         colorDom=<ul>{this.state.colors.map(color=>(<li>{color}</li>))}</ul>
//         }

//         return (
//             <div>
//                 {colorDom}
//             </div>
//          );
//     }
// }

//// 2 other methods  (important)
// render() { import NavBar from './Components/navbar';
//import ShoppingCart from './Components/ShoppingCart';

//     return (
//         <div>
//              {/* 1- using the condition and &&
//              // && return first falsy ,, last true
//              */}
//             {/* {this.state.colors.length===0&& <div>No color in the list</div>}
//             <ul>

//     {this.state.colors.map((color)=>( <li>{color}</li>))}
//             </ul> */}

//             {/* 2- Using tirnary operator*/}
//             {this.state.colors.length===0 ? <div>No color in the list</div> :<ul>

//                {this.state.colors.map((color)=>( <li>{color}</li>))}
//                        </ul> }

//         </div>
//      );
// }

//////////////////////////////////////////////
//  How to render list from array

//1. for
//  render() {
//     const colorElem=[]
//     for(var i=0;i<this.state.colors.length;i++){
//     colorElem[i]= <li>{this.state.colors[i]}</li>
//     }
//     return (
//         <div>
//             {colorElem}
//         </div>
//      );
// }
// }

//2. map
// render() {
//     const colorElem= this.state.colors.map((color)=> (<li>new {color}</li>))
//         return (
//             <div>
//                 {colorElem}
//             </div>
//          );
//     }
// }

//2. map also
// render() {
//     return (
//         <div>
//             <ul>
//                 {
//this.state.colors.map((p)=>
//                 <li>
//                     {p}
//                 </li>
//                 )}
//             </ul>
//         </div>
//      );
// }

//1.First req day1
// //creating App component (Root of all components)
// export default class App extends Component{
//     //1. State (Data), it is like member variable in C#
//     State={

//     };

//     //2.render (UI)
//     render(){
//         return (<div>
//             <h1>
//                 Hello World
//             </h1>
//            <ShoppingCard/>
//         </div>);
//     }
// }
