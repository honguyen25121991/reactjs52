import React, { Component } from 'react'
import ClassProps from './ClassProps';
import FunctionPops from './FunctionPops';
export default class DemoProps extends Component {
    type = "Husky";
    image = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Le%C3%AFko_au_bois_de_la_Cambre.jpg/220px-Le%C3%AFko_au_bois_de_la_Cambre.jpg";
    render() {
        return (
            <div>
                <h2>Props</h2>
                {/**props dùng để truyền dữ liệu giữa các component */}
                
                 {/**Cách truyền data */}
                <FunctionPops loaiCho ={this.type} img={this.image}/>
                <ClassProps typeDog = {this.type} imgHusky={this.image}/>
            </div>
        )
    }
}
