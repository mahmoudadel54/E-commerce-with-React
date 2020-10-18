import React, { Component } from "react";
import Joi from "joi-browser";
import axios from "axios";
import Input from "./input";

class ProductForm extends Component {
  state = {
    name: "",
    price: 0,
    sale: 30,
    typeId: "Select on of Types",
    error: {},
  };

  async componentDidMount() {
    if (this.props.match.params.id !== "add") {
      //Get Product
      const { data: product } = await axios.get(
        `http://localhost:3000/products/${this.props.match.params.id}`
      );
      //Edit State
      this.setState({
        name: product.name,
        price: product.priceAFS,
        sale: product.sale,
        typeId: product.typeId,
      });
    }
  }

  //--------------------Validate using Joi -------------------------//
  schema = Joi.object().keys({
    name: Joi.string().required().label("Name"),
    price: Joi.number().required().label("Price"),
    sale: Joi.number().required().label("Sale"),
    typeId: Joi.number().required().label("Type"),
  });

  ////using Joi validate function
  validate = () => {
    const data = { ...this.state };
    delete data.error;
    const res = Joi.validate(data, this.schema, { abortEarly: false });
    if (res.error) {
      const error = {};
      for (const detail of res.error.details) {
        error[detail.path[0]] = detail.message;
        this.setState({ error });
      }
      return false;
    }
    return true;
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.validate()) {
      //Add or Edit
      this.props.match.params.id === "add"
        ? this.addProduct()
        : this.editProduct();
    } else {
      console.log("Not Submit");
    }
  };

  addProduct = async () => {
    ///Prepare Product
    const product = {
      name: this.state.name,
      sale: parseInt(this.state.sale),
      priceBS: parseInt(this.state.price * (1 + this.state.sale / 100)),
      priceAFS: parseInt(this.state.price),
      isInCart: false,
      count: 0,
      typeId: parseInt(this.state.typeId),
    };
    //call Backend
    const { data } = await axios.post(
      "http://localhost:3000/products",
      product
    );

    //On Add
    console.log(data);
    this.props.onAddProduct(data);
    //Redirect
    this.props.history.replace("/admin");
  };

  editProduct = async () => {
    //Prepare Product
    const product = {
      name: this.state.name,
      sale: parseInt(this.state.sale),
      priceBS: parseInt(this.state.price * (1 + this.state.sale / 100)),
      priceAFS: parseInt(this.state.price),
      isInCart: false,
      count: 0,
      typeId: parseInt(this.state.typeId),
    };
    ///calling backend but by put verb
    const { data } = await axios.put(
      "http://localhost:3000/products/" + this.props.match.params.id,
      product
    );

    //On Edit
    console.log(data);
    this.props.onEditProduct(data);
    //redirect
    this.props.history.push("/admin");
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const id = this.props.match.params.id;
    return (
      <React.Fragment>
        <div className=" registerForm logIn">
          <div className="col-3 ml-4 formFormat">
            <h1 className="mb-3 headerForm">
              {id === "add" ? "Add Product" : "Edit Product"}
            </h1>
            <br />
            <form onSubmit={this.handleSubmit}>
              <Input
                label="Name"
                name="name"
                value={this.state.name}
                error={this.state.error.name}
                onChange={this.handleChange}
                typeInput="text"
              />
              <br />
              <Input
                label="Price"
                name="price"
                value={this.state.price}
                error={this.state.error.price}
                onChange={this.handleChange}
                typeInput="number"
              />
              <br />
              <Input
                label="Sale %"
                name="sale"
                value={this.state.sale}
                error={this.state.error.sale}
                onChange={this.handleChange}
                typeInput="number"
              />
              <br />
              <label className="font-weight-bold" htmlFor="Type">
                Type of Product
              </label>
              <select
                value={this.state.typeId}
                onChange={this.handleChange}
                name="typeId"
                id="typeId"
                className="browser-default custom-select"
              >
                <option defaultValue>Select on of Types</option>
                {this.props.types.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.name}
                  </option>
                ))}
              </select>
              {this.state.error.typeId && (
                <div>
                  <span className="errorSpan">
                    {"*" + this.state.error.typeId}
                  </span>
                  <br />
                </div>
              )}
              <br />
              <div className="signUp">
                <button type="submit" className="btn btn-primary ">
                  {id === "add" ? "Add" : "Edit"}
                </button>
              </div>
              <br />
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductForm;
