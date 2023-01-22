import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Header from "./components/admin/Header";
import ManageAssets from "./components/user/ManageAssets";
import UserManager from "./components/admin/UserManager";
import AddForm from "./components/user/AddForm";
import ListForms from "./components/user/ListForms";
// import Footer from "./components/main/Footer";
import Main from "./components/main";
import Home from "./components/main/Home";
import Login from "./components/main/Login";
import Signup from "./components/main/Signup";
import ContactInfo from "./components/main/ContactInfo";
import Admin from "./components/admin";
import User from "./components/user";
import Profile from "./components/user/Profile";
import ResponseManage from "./components/user/ResponseManage";
import UpdateUser from "./components/admin/UpdateUser";
import UserAuth from "./UserAuth";
import Dashboard from "./components/admin/Dashboard";
import AdminAuth from "./AdminAuth";
import ResetPassword from "./components/main/ResetPassword";
import HeaderDashboard from "./components/admin/HeaderDashboard";
import MenuDashboard from "./components/admin/MenuDashboard";
import Dash from "./components/admin/Dash";
import Preview from "./components/main/Preview";
import NotFound from "./components/NotFound";
import { useState } from "react";
import UserProvider from "./components/context/UserProvider";

function App() {

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  return (
    <div>
      <BrowserRouter>
      <UserProvider currentUser={currentUser}>
        <Routes>
          <Route element={<Navigate to="/main/home" />} path="/" />

          <Route element={<Main />} path="main">
            <Route element={<Home />} path="home" />
            <Route element={<Login />} path="login" />
            <Route element={<Signup />} path="signup" />
            <Route element={<ContactInfo />} path="contactInfo" />
            <Route element={<Preview />} path="preview/:formid" />
            <Route element={<ResetPassword />} path="resetpassword" />
          </Route>

          <Route
            element={
              <AdminAuth>
                <Admin />
              </AdminAuth>
            }
            path="admin"
          >
            <Route element={<UserManager />} path="usermanager" />
            <Route element={<UpdateUser />} path="updateuser" />
            <Route element={<Dashboard />} path="dashboard" />
            <Route element={<HeaderDashboard />} path="headerDashboard" />
            <Route element={<MenuDashboard />} path="MenuDashboard" />
            <Route element={<Dash />} path="dash" />
          </Route>

          <Route
            element={
              <UserAuth>
                <User />
              </UserAuth>
            }
            path="user"
          >
            <Route element={<ManageAssets />} path="manageAsset" />
            <Route element={<AddForm />} path="editform/:formid" />
            <Route element={<ListForms />} path="listForm" />
            <Route element={<Profile />} path="profile" />
            <Route element={<ResponseManage />} path="responseManage" />
          </Route>
          <Route element={<NotFound />} path="*" />
        </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
