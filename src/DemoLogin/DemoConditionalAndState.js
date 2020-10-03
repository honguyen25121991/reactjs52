import React, { Component } from 'react'

export default class DemoConditionalAndState extends Component {
    /**
     * islogin la thuoc tinh cua class
     *  true : da dang nhap  => hien ten nguoi dung
     * false : chua dang nhap => hien nut login
     */
    state = {
        islogin :false , 
    }
    // islogin = false ;
    handleClick = ()=>{
        // this.islogin = true;
        // this.state.islogin=true;
        this.setState({
            islogin :true,
        });
    }
    renderLogin = () =>{
        // console.log("run render");
        if(this.state.islogin){
            return <p>Nguyen Ngoc Ho</p>;
        }else {
            return  <button onClick={this.handleClick}> Login</button>
        }
        // Cach 2 dung dieu kien toan tu 3 ngoi 
        // dieu kien ? xu ly dung : xu ly sai
        // return this.islogin ? <p>Nguyen Ngoc Ho</p> :<button>Login</button>
    }  

    render() {
        return (
            <div>
                <h2> Conditional And State </h2>
                <div>
                {this.renderLogin()}
                </div>
                
            </div>
        )
    }
}
