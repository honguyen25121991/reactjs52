import React, { Component } from 'react'

export default class DemoCourse extends Component {
    danhSachKhoaHoc = [
        "ReactJS", "NodeJs", "VueJS"
    ];
    // 
    renderDanhSachKhoaHoc = () => {
        return  this.danhSachKhoaHoc.map((KhoaHoc, index) => {
            return <li key={index}>{KhoaHoc}</li>
        });        
        
    }
    render() {
        return (
            <div>
                <h2>List And Key </h2>
                <h3>Danh sach khoa hoc</h3>
                <ul>
                    {this.renderDanhSachKhoaHoc()}
                </ul>
            </div>
        )
    }
}
