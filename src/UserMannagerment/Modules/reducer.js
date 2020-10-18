import { map } from "jquery";
import { DELETE_USER,SUBMIT_USER,EDIT_USER } from "./constant";

let initialState = {
    userList: [
        {
        id: 1,
        name: "Dinh Phuc Nguyen",
        userName: "dpnguyen",
        email: "dpnguyen@gmail.com",
        phoneNumber: "1123123213",
        type: "VIP",
        },
        {
        id: 2,
        name: "hao",
        userName: "nguyendp",
        email: "nguyendp@gmail.com",
        phoneNumber: "1123123213",
        type: "VIP",
        },
        ],
}
const userReducer = (state = initialState,action)=>{
    switch (action.type) {
        case DELETE_USER:{
            console.log(action)
            let userList = [...state.userList];
             userList=  userList.filter((item)=>{
                return item.id !==action.payload.id;
            });
            state.userList = userList;
            return {...state};
        };
        case SUBMIT_USER:{            
            const user = { ...action.payload, id  : Math.random()};
            let userList = [...state.userList,user];
            state.userList= userList;
            return {...state};
        }case EDIT_USER  : {
            state.userEdit = action.payload;
            console.log(action);
            return {...state}
        }  
        default:
            return {...state};
            
    }
}

export default userReducer;