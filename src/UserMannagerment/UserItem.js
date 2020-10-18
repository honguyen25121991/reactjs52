import React, { Component } from "react";
import {accDeleteUser, actDelete_User, actEditUser,} from "./Modules/actions";
import {connect} from "react-redux";

class UserItem extends Component {
  render() {
    const {user} = this.props;

    return (
      <tr>
        <td>{user.name}</td>
        <td>{user.userName}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.type}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick = {()=>{
              this.props.editUser(user);
            }}
          >
            Edit
          </button>
          <button className="btn btn-danger" onClick = {()=>{
            this.props.deleteUser(user);
          }} >Delete</button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteUser : (user)=>{
        dispatch (accDeleteUser(user));
    },
    editUser : (user)=>{
      dispatch (actEditUser(user));
    }
  }
}


export default connect(null,mapDispatchToProps)(UserItem);
