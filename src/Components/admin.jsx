import React, { Component } from "react";
import { Link } from "react-router-dom";

class Admin extends Component {
  state = {};
  render() {
    const { products, types } = this.props;
    return (
      <React.Fragment>
        {console.log(types)}
        <div className="col">
          <span style={{ margin: "20px" }}>
            <h2>Admin panel</h2>
          </span>
          <Link
            to="/productForm/add"
            className="btn btn-warning"
            style={{ margin: "20px" }}
          >
            Add Product
          </Link>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Type</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.priceAFS}</td>
                  <td>{types.find((type) => type.id === p.typeId).name}</td>
                  <td>
                    <Link to={"/productForm/" + p.id} className="btn btn-info">
                      Edit
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.props.onDeleteProduct(p)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}
export default Admin;

// const Admin = (props) => {
//     const {products} =props
//     return (
//         <React.Fragment>
//             <span>Admin panel</span>
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Price</th>
//                         <th>Type</th>
//                         <th></th>
//                         <th></th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {products.map(p=>(
//                     <tr key={p.id}>
//                         <td>{p.name}</td>
//                         <td>{p.priceAFS}</td>
//                         <td>
//                             {/* {props.types.find(item => item.id===p.typeId).id} */}
//                         </td>
//                         <td></td>
//                         <td></td>
//                     </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </React.Fragment>
//      );
// }

// export default Admin;
