import React, { Component } from 'react'

export default class DemoDataBinding extends Component {
    // thuộc tính của class
     ten="Nguyễn Ngọc Hồ";
     lop="front-end-52"
     renderName = () => {
        return <p>tên : {this.ten}</p>
     }
    render() {
         // Biến phương thức render
        const hinhAnh = "https://i.ibb.co/G3xKFwN/team.jpg";
        return (
            <div>
                <h2>DataBinding</h2>
                {/* <p>tên : {this.ten}</p> */}
                {this.renderName()}
                <p>lớp : {this.lop}</p>
                <img src={hinhAnh} atl="hinhAnd"/>
              
            </div>
        )
    }
}
