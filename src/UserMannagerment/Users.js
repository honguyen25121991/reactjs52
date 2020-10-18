import React, { Component } from "react";
import { connect } from "react-redux";
import UserItem from "./UserItem";

class Users extends Component {

  rederTable = ()=>{
    const {userList} = this.props;
    return userList.map((item)=>{
      return <UserItem key ={item.id }   user={item} />
    })
  }
  render() {   
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {this.rederTable()}  
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    userList : state.userReduces.userList,
  };
};


export default connect(mapStateToProps,null)(Users);
