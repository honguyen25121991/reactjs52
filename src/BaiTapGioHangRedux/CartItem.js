import { type } from "jquery";
import React, { Component } from "react";
import {actDelete} from "../redux/actions/index";

class CartItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.cart.maSanPham}</td>
        <td>{this.props.cart.tenSanPham}</td>
        <td>
          <img src={this.props.cart.hinhAnh} width={50} alt />
        </td>
        <td>
          <button
            onClick={() => {
              const cartDuocNhan = this.props.cart;
              // this.props.handleTangGiam(cartDuocNhan, false);
              const data = {
                product : cartDuocNhan,
                status :false,
              };
              this.props.tangGiamSL(data);
            }}
          >
            -
          </button>
          {this.props.cart.soLuong}
          <button
            onClick={() => {
              const cartDuocNhan = this.props.cart;
              // this.props.handleTangGiam(cartDuocNhan, true);
              const cartDuocNhan = this.props.cart;
              // this.props.handleTangGiam(cartDuocNhan, false);
              const data = {
                product : cartDuocNhan,
                status :true,
              };
              this.props.tangGiamSL(data);
            }}
          >
            +
          </button>
        </td>
        <td>{this.props.cart.giaBan}</td>
        <td>{this.props.cart.giaBan * this.props.cart.soLuong}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => {
              const cartDuocNhan = this.props.cart;
              this.props.handleDelete(cartDuocNhan);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
const mapDispatchoProps = dispatch =>{
  return {
     deleteProDuct : (product)=>{
       const action = {
         type : "DELETE_PRODUCT",
         payloadt : product,
       };
       dispatch(action)
     },
     tangGiamSL: (data) =>{
       const action = {
        type : "TANG_GIAM_SL",
        payloadt : data,
       }     
     }
  }
}

export default CartItem;
