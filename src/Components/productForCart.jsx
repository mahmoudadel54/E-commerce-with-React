import React from "react";

const productForCart = (props) => {
  const { products, OnhandlerAdd, OnhandlerMinus, OnhandlerDelete } = props;
  let i = 0;
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Product Name</th>
          <th scope="col"></th>
          <th scope="col">Count</th>
          <th scope="col">Product Price</th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <tr key={p.id}>
            <th scope="row">{++i}</th>
            <td>{p.name}</td>
            <td></td>
            <td>{p.count}</td>
            <td>{p.priceAFS}</td>
            <td>
              <button
                className="btn btn-primary"
                onClick={() => OnhandlerAdd(p.id)}
              >
                {" "}
                +
              </button>{" "}
            </td>
            <td>
              <button
                className="btn btn-warning"
                onClick={() => OnhandlerMinus(p.id)}
              >
                {" "}
                -
              </button>{" "}
            </td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => OnhandlerDelete(p.id)}
              >
                Delete
              </button>{" "}
            </td>
            <td></td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default productForCart;
