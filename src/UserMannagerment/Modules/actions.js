// import userReducer from "./reducer"
import {DELETE_USER} from "./constant"
import {SUBMIT_USER} from "./constant"
import {EDIT_USER} from "./constant"


export const accDeleteUser = (user)=>{
    return {
        type : DELETE_USER,
        payload  : user,
    };
};

export  const actSubmitUser = (user)=>{
    return {
        type  : SUBMIT_USER,
        payload  : user ,
    };
};

export const actEditUser = (user) =>{
    return {
        type : EDIT_USER,
        payload :user,
    };
};