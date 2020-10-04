import React, { Component } from 'react'
// Cách nhận dữ liệu từ props

export default function FunctionPops(props) {
    console.log(props);    
        return (
            <div>
                <h3>Function Props</h3>
                <p>Type : {props.loaiCho}</p>
                <img  src= {props.img} alt="hình đẹp  "  />
            </div>
        )
   
}
