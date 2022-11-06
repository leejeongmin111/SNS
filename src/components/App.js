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
<<<<<<< HEAD
=======
import UserPage from "./UserPage";

>>>>>>> 54c92f16e1bc3ff5ee7f4ff1598c8d15eb0ea152

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
          <Route path="/dm" element={<Dm></Dm>}></Route>
          <Route path="/status" element={<Status></Status>}></Route>
          <Route path="/special" element={<Special></Special>}></Route>
          <Route path="/jobsns" element={<JobSns></JobSns>}></Route>
          <Route path="/notice" element={<Notice></Notice>}></Route>
          <Route path="/userpage" element={<UserPage></UserPage>}></Route>
        </Routes>
      </Provider>
    </>
  );
}
export default App;
