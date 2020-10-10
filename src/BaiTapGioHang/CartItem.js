import React, { Component } from "react";

export default class CartItem extends Component {
  render() {
    return (
      <div>
        <tr>
          <td>1</td>
          <td>Iphone XS Max</td>
          <td>
            <img src="./img/applephone.jpg" width={50} alt />
          </td>
          <td>
            <button>-</button>5<button>+</button>
          </td>
          <td>27000000</td>
          <td>135000000</td>
          <td>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
      </div>
    );
  }
}
