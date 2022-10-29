import "../styles/App.scss";
import Login from "../components/Account/Login";
import { Route, Routes } from "react-router-dom";
import Register from "../components/Account/Register.js";
import MainSns from "./MainSns";
import Write_Job_Special from "./Account/Write_Job_Special";

import MyProfile from "./Account/MyProfile";
// import Profile from "./JobSns/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/pro" element={<MyProfile></MyProfile>}></Route>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/mainsns" element={<MainSns></MainSns>}></Route>
        <Route path="/write/jobspecial" element={<Write_Job_Special></Write_Job_Special>}></Route>

      </Routes>
    </>
  );
}
export default App;
