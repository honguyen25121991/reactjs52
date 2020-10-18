import React, { Component } from "react";
import {actSubmitUser} from "./Modules/actions";
import {connect} from "react-redux"

class Modal extends Component {
  state = {
    userName: "",
    name: "",
    email: "",
    phoneNumber: "",
    type: "TYPE",
  }

  hanDleOnchange = (event)=>{
    // console.log(event.target.name,event.target.value);
    const {name , value} = event.target;
    this.setState({
    [name]: value,
    }, ()=>{
      // console.log(this.state);
    });
  };
  handleSubMid = (e) =>{
    //Dung de khong bi load lai trang
    e.preventDefault();
    console.log(this.state)
    this.props.submitUser(this.state)
  }
  render() {
    return (
      <div
        className="modal fade"
        id="modelIdUser"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {this.props.userEdit?"EDIT USER":"ADD USER"}

              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit = {this.handleSubMid}>
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" className="form-control" name="userName" onChange={this.hanDleOnchange}  value={this.state.value} />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control"  name ="name"  onChange={this.hanDleOnchange}/>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control" name ="email" onChange={this.hanDleOnchange} />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" className="form-control" name ="phoneNumber" onChange={this.hanDleOnchange} />
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select className="form-control" name="type" onChange={this.hanDleOnchange}>
                    <option>USER</option>
                    <option>VIP</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    submitUser :(user)=>{
     
    }
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    submitUser:(user)=> {
      dispatch (actSubmitUser(user));
    }
  }
}
export default connect(null,mapDispatchToProps)(Modal);
