let initialState = {
    userList: [
        {
        id: 1,
        name: "Dinh Phuc Nguyen",
        username: "dpnguyen",
        email: "dpnguyen@gmail.com",
        phoneNumber: "1123123213",
        type: "VIP",
        },
        {
        id: 2,
        name: "hao",
        username: "nguyendp",
        email: "nguyendp@gmail.com",
        phoneNumber: "1123123213",
        type: "VIP",
        },
        ],
}
const userReducer = (state = initialState,action)=>{
    switch (action.type) {
       
    
        default:
            return {...state}
            
    }
}

export default userReducer;