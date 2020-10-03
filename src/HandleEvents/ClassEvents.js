import React, { Component } from 'react'

export default class ClassEvents extends Component {
    //Phuong thuwc cua class
    handleFocus = () => {
        // alert ("da focus roi nhe");
        console.log("da focus roi")
    };
    handleFocusParams = (message) => {
        console.log(message);
    }
    render() {
        return (
            <div>
                <h2> Class Events </h2>
               
                 <input type = "text" placeholder= "focus" onFocus ={                   
                    this.handleFocus("hello ho")}/>
                 <input type = "text" placeholder= "focus" onFocus ={()=>
                    
                    this.handleFocusParams("hello ho")}/>
            </div>
        )
    }
}
