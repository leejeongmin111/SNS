import "../styles/App.scss";
import Login from "../components/Account/Login";
import { Route, Routes } from "react-router-dom";
import Register from "../components/Account/Register.js";
import MainSns from "./MainSns";
import Dm from "./Account/Dm";
import MyProfile from "./Account/MyProfile";
import Write_Daily from "./Account/Write_Daily";
// import Profile from "./JobSns/Profile";
import Job_Dash from "./JobSns/Job_Dash";

import { createStore } from "redux";
import { Provider } from "react-redux";

function reducer(currentState, action) {
  if (currentState === undefined) {
    return {
      email: "",
    };
  }

  if (action.type == "test") {
    currentState.email = action.email;
  }

  return { ...currentState };
}

const store = createStore(reducer);

function App() {
  return (
    <>

      <Provider store={store}>
        <Routes>
          <Route path="/pro" element={<MyProfile></MyProfile>}></Route>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/mainsns" element={<MainSns></MainSns>}></Route>
          <Route path="/dm" element={<Dm></Dm>}></Route>
        </Routes>
      </Provider>
    </>
  );
}
export default App;
