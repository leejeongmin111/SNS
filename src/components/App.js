import "../styles/App.scss";
import Login from "./Account/Login";
import { Route, Routes } from "react-router-dom";
import Register from "../components/Account/Register.js";
import MainSns from "./MainSns";
import JobSns from "./JobSns";
import Special from "./Special";
import Status from "./Status";
import MyPage from "./MyPage";
import UserPage from "./UserPage";
import Dm from "./DM/Dm";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Notice from "./Notice";
import Account_Change from "./Account/Account_Change";
import JobSetting from "./Account_Setting/Job_Setting";

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
          <Route path="/mypage" element={<MyPage></MyPage>}></Route>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/mainsns" element={<MainSns></MainSns>}></Route>
          <Route path="/status" element={<Status></Status>}></Route>
          <Route path="/special" element={<Special></Special>}></Route>
          <Route path="/jobsns" element={<JobSns></JobSns>}></Route>
          <Route path="/notice" element={<Notice></Notice>}></Route>
          <Route path="/userpage" element={<UserPage></UserPage>}></Route>
          <Route
            path="/change"
            element={<Account_Change></Account_Change>}
          ></Route>
          <Route path="/jobsetting" element={<JobSetting></JobSetting>}></Route>

        </Routes>
      </Provider>
    </>
  );
}
export default App;
