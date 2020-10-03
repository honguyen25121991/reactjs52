import React, { Component } from 'react'

export default class FunctionEvents extends Component {
    render() {
        const handleClick = () =>{
            alert ("click me");
        }
        const handleClickParams = (message)=> {
            alert (message)
        }
        return (
            <div>
                <h2>FunctionEvent</h2>
                 {/* /**
                    Xử lý sự kiện trong js thuần
                  */ }
                   <button onclick="handleClick()">Click Me</button>
                  {/* Xử lý sự kiện trong reactjs */}
                  <button onClick={handleClick}> Click reactjs</button>
                  <button onClick={()=>
                    {handleClickParams("hello cybersoft")}
                    }>Click reactjs params</button>
            </div>
        )
    }
}
