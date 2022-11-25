import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import ManageAssets from './components/ManageAssets';
import UserManager from './components/UserManager';
import ContactInfo from './components/ContactInfo';
import AddForm from './components/AddForm';
import ListForms from './components/ListForms';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Home/>} path="home" />
        <Route element={<Login/>} path="login" />
        <Route element={<Signup/>} path="signup" />
        <Route element={<ManageAssets/>} path="manageAsset" />
        <Route element={<UserManager/>} path="userManager" />
        <Route element={<ContactInfo/>} path="contactInfo" />
        <Route element={<AddForm/>} path="addForm/:formid" />
        <Route element={<ListForms/>} path="listForm" />

        
      </Routes>
      

      </BrowserRouter>
    </div>
  );
}

export default App;
