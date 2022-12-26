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

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Navigate to="/main/home" />} path="/" />

          <Route element={<Main />} path="main">
            <Route element={<Home />} path="home" />
            <Route element={<Login />} path="login" />
            <Route element={<Signup />} path="signup" />
            <Route element={<ContactInfo />} path="contactInfo" />
          </Route>

          <Route element={<ManageAssets />} path="manageAsset" />
          <Route element={<UserManager />} path="userManager" />
          <Route element={<AddForm />} path="editform/:formid" />
          <Route element={<ListForms />} path="listForm" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
