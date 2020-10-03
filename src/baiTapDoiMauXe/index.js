/**
 * Cac buoc thuc hien
 * 1/ Dan layout (html, css) -- done
 * 2/ Xac dinh cac du lieu thay doi va luu vao trong state - done
 * 3/ Lay Data trong State di binding ra jsx - done
 * 4/ Bat su kien cho cac nut  chon mau -done
 * 5/ Cap nhat lai gia tri trong state
 */

import React, { Component } from "react";

export default class BaiTapChonMauXe extends Component {
  state = {
    imgCar: "./img/car/products/black-car.jpg",
  };
 handleChangeColor = (imgCar) =>{
    // console.log(imgCar);
    // cap nhat
    this.setState({
        imgCar: imgCar,
    })
 }
  render() {
    return (
      <div>
        <section className="show-room">
          <h2 className="text-center">Bài Tập Chọn Màu Xe</h2>
          <div className="container">
            <div className="chose__color d-flex justify-content-around">
              <button className="btn" onClick ={()=>this.handleChangeColor("./img/car/products/black-car.jpg")}>
                <img
                  src="./img/car/icons/icon-black.jpg"
                  alt="hinh"
                  style={{ width: 50 }}
                />
              </button>
              <button className="btn" onClick ={()=>this.handleChangeColor("./img/car/products/red-car.jpg")}>
                <img
                  src="./img/car/icons/icon-red.jpg"
                  alt="hinh"
                  style={{ width: 50 }}
                />
              </button>
              <button className="btn" onClick ={()=>this.handleChangeColor("./img/car/products/silver-car.jpg")}>
                <img
                  src="./img/car/icons/icon-silver.jpg"
                  alt="hinh"
                  style={{ width: 50 }}
                />
              </button>
              <button className="btn" onClick ={()=>this.handleChangeColor("./img/car/products/steel-car.jpg")}>
                <img
                  src="./img/car/icons/icon-steel.jpg"
                  alt="hinh"
                  style={{ width: 50 }}
                />
              </button>
            </div>
            <div className="car mt-2">
              <img
                className="img-thumbnail"
                src={this.state.imgCar}
                alt="hinh"
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
