import { combineReducers } from "redux";
import gioHangReducer from "./gioHangReducer";
import userReduces from "./../../UserMannagerment/Modules/reducer"

const rootReducer = combineReducers({
  // reducer con
  //   gioHangreducer : gioHangreducer,
  // gioHangReducer,
  userReduces,
});

export default rootReducer;
