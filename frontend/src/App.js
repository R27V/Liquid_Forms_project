import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/admin/Header";
import ManageAssets from "./components/user/ManageAssets";
import UserManager from "./components/admin/UserManager";
import AddForm from "./components/user/AddForm";
import ListForms from "./components/user/ListForms";
import Footer from "./components/main/Footer";
import Main from "./components/main";
import Home from "./components/main/Home";
import Login from "./components/main/Login";
import Signup from "./components/main/Signup";
import ContactInfo from "./components/main/ContactInfo";
import Admin from "./components/admin";
import User from "./components/user";
import Profile from "./components/user/Profile";
import UpdateUser from "./components/admin/UpdateUser";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Navigate to="/main/home" />} path="/" />

          <Route element={<Main />} path="main" />
          <Route element={<Home />} path="main/home" />
          <Route element={<Login />} path="main/login" />
          <Route element={<Signup />} path="main/signup" />
          <Route element={<ContactInfo />} path="main/contactInfo" />
          {/* </Route> */}

          <Route element={<Admin />} path="admin" />
            <Route element={<UserManager />} path="admin/usermanager" />
            <Route element={<UpdateUser />} path="admin/updateuser" />

          {/* </Route> */}

          <Route element={<User />} path="user" />
            <Route element={<ManageAssets />} path="user/manageAsset" />
            <Route element={<AddForm />} path="user/editform/:formid" />
            <Route element={<ListForms />} path="user/listForm" />
            <Route element={<Profile />} path="user/profile" />

          {/* </Route> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
