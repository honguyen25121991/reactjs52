import React from "react";
import logo from "./logo.svg";
import "./App.css";
import StateLessComponent from "./components/StateLessComponent";
import StateFull, { StateFullComponent } from "./components/StateFullComponent";
import Home from "./baiTapChiaComponent/Home";
import demo from "./DataBinding/DemoDataBinding"
import DemoDataBinding from "./DataBinding/DemoDataBinding";
import HandleEvens from "./HandleEvents/FunctionEvents"
import ClassEvents from "./HandleEvents/ClassEvents";
import DemoConditionalAndState from "./DemoLogin/DemoConditionalAndState"
import BaiTapChonMauXe from "./baiTapDoiMauXe/BaiTapDoiMauXe";
import DemoCourse from "./ListAndKeys/DemoCourse"
import DemoProps from "./Props/DemoProps"
import BaiTapGioHang from "./BaiTapGioHang/BaiTapGioHang"

function App() {
  return (
    <div>
      {/* <StateLessComponent />
      <StateFull /> */}
      {/* <Home /> */}
      {/* <DemoDataBinding/>
      <HandleEvens/> */}
      {/* <ClassEvents/> */}
      {/* <DemoConditionalAndState/> */}
      {/* <BaiTapChonMauXe/> */}
      {/* <DemoCourse/> */}
      {/* <DemoProps/> */}
      <BaiTapGioHang/>
    </div>
  );
}

export default App;
