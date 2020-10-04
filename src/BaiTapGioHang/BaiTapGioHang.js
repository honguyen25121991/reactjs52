/*
 * Các bước thực hiện :
 * 1 Dàn layout (html,css) -done
 * 2 Xác định data thay đổi và lưu vào state - done
 * 3 Lấy data trong state du binding ra jsx - done
 * 4 Render mảng dữ liệu 
 * 5. Xấy dựng chức năng  xem chi tiết
 * 6 Xây dựng chức năng thêm giỏ hàng
 * 7 . Xây dựng chức năng  delete sản phẩm khỏi giỏ hàng ,
 * 8. tăng giảm số lượng
 * 9 .xây dựng chức năng hiện thị tổng số phẩm
 */

import React, { Component } from "react";

export default class BaiTapGioHang extends Component {

    danhSachSanPham =[
        {
            maSanPham :"1",
            tenSanPham:"VS Phone",
          hinhAnh: "img/vsphone.jpg",
          manHinh: `AMOLED, 6.2", Full HD+`,
          heDieuHanh: "Android 9.0 (Pie)",
          cameraTruoc: "20MP",
          cameraSau: "Android 9.0 (Pie)",
          ram: "4GB",
          rom: "6GB",
        },
        {
            maSanPham :"2",
            tenSanPham:"MeizuPhone",
          hinhAnh: "img/meizuphone.jpg",
          manHinh: `AMOLED, 6.2", Full HD+`,
          heDieuHanh: "Android 9.0 (Pie)",
          cameraTruoc: "20MP",
          cameraSau: "Android 9.0 (Pie)",
          ram: "4GB",
          rom: "6GB",
        },
        {
            maSanPham :"3",
            tenSanPham:"Apple Phone",
          hinhAnh: "img/applephone.jpg",
          manHinh: `OLED, 6.5", 1242 x 2688 Pixels
          `,
          heDieuHanh: "Ios 14.0 (Pie)",
          cameraTruoc: "20MP",
          cameraSau: "Android 9.0 (Pie)",
          ram: "4GB",
          rom: "6GB",
        }
    ]

  state = {
    sanPhamChiTiet: {
        maSanPham :"1",
        tenSanPham:"Apple Phone",
      hinhAnh: "img/vsphone.jpg",
      manHinh: `AMOLED, 6.2", Full HD+`,
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20MP",
      cameraSau: "Android 9.0 (Pie)",
      ram: "4GB",
      rom: "6GB",
    },
  };
  renderDanhSachSanPham = () => {
      return this.danhSachSanPham.map((sanPham,index)=>{
        
       return <div className="col-sm-4" key={index}>
        <div className="card">
          <img
            className="card-img-top"
            src="./img/vsphone.jpg"
            alt
          />
          <div className="card-body">
            <h4 className="card-title">VinSmart Live</h4>
            <button className="btn btn-success">Chi tiết</button>
            <button className="btn btn-danger">
              Thêm giỏ hàng
            </button>
          </div>
        </div>
      </div>
      })
  }
  render() {
    return (
      <div>
        <div>
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <div id="root">
            <div>
              <section className="container">
                <h3 className="title text-center">Bài tập giỏ hàng</h3>
                <div className="container text-center my-2">
                  <button
                    className="btn btn-danger "
                    data-toggle="modal"
                    data-target="#modelId"
                  >
                    Giỏ hàng
                  </button>
                </div>
                <div className="container">
                  <div className="row">
                   
                {this.state.sanPhamChiTiet.tenSanPham}
                    
                    
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="modelId"
                  tabIndex={-1}
                  aria-labelledby="modelTitleId"
                  aria-hidden="true"
                  style={{ display: "none" }}
                >
                  <div
                    className="modal-dialog"
                    role="document"
                    style={{ maxWidth: 1000 }}
                  >
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Giỏ hàng</h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Mã sản phẩm</th>
                              <th>tên sản phẩm</th>
                              <th>hình ảnh</th>
                              <th>số lượng</th>
                              <th>đơn giá</th>
                              <th>thành tiền</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Iphone XS Max</td>
                              <td>
                                <img
                                  src="./img/applephone.jpg"
                                  width={50}
                                  alt
                                />
                              </td>
                              <td>
                                <button>-</button>1<button>+</button>
                              </td>
                              <td>27000000</td>
                              <td>27000000</td>
                              <td>
                                <button className="btn btn-danger">
                                  Delete
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>Meizu 16Xs</td>
                              <td>
                                <img
                                  src="./img/meizuphone.jpg"
                                  width={50}
                                  alt
                                />
                              </td>
                              <td>
                                <button>-</button>4<button>+</button>
                              </td>
                              <td>7600000</td>
                              <td>30400000</td>
                              <td>
                                <button className="btn btn-danger">
                                  Delete
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-5">
                    <img
                      className="img-fluid"
                      src={this.state.sanPhamChiTiet.hinhAnh}
                      alt
                    />
                  </div>
                  <div className="col-sm-7">
                    <h3>Thông số kỹ thuật</h3>
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>Màn hình</td>
                          <td>{this.state.sanPhamChiTiet.manHinh}</td>
                        </tr>
                        <tr>
                          <td>Hệ điều hành</td>
                          <td>{this.state.sanPhamChiTiet.heDieuHanh}</td>
                        </tr>
                        <tr>
                          <td>Camera trước</td>
                          <td>{this.state.sanPhamChiTiet.cameraTruoc}</td>
                        </tr>
                        <tr>
                          <td>Camera sau</td>
                          <td>{this.state.sanPhamChiTiet.cameraSau}</td>
                        </tr>
                        <tr>
                          <td>RAM</td>
                          <td>{this.state.sanPhamChiTiet.ram}</td>
                        </tr>
                        <tr>
                          <td>ROM</td>
                          <td>{this.state.sanPhamChiTiet.rom}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
