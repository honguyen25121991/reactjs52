import React, { Component } from "react";
import {connect} from "react-redux";
 
class SanPham extends Component {
  render() {
    return (
      <div className="card">
        <img className="card-img-top" src={this.props.sanPham.hinhAnh} alt />
        <div className="card-body">
          <h4 className="card-title">{this.props.sanPham.tenSanPham}</h4>
          <button
            className="btn btn-success"
            onClick={() => {
              const sanPhamDuocNhan = this.props.sanPham;
              this.props.handleDetail(sanPhamDuocNhan);
            }}
          >
            Chi tiết
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              const sanPhamDuocNhan = this.props.sanPham;
              this.props.handleAddSP(sanPhamDuocNhan);
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    // key : value 
    // key vẫn là props của component : Value là phương thức gửi acction lên store
    handleDetail:(sanPham)=>{
      const action = {
        type : "DETAIL_PRODUCT",
        payload : sanPham,
      };
      dispatch(action);
    }
  };
}

export default connect(null,mapDispatchToProps)(SanPham);
