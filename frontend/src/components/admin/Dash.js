import React from "react";
import Dashboard from "./Dashboard";
import HeaderDashboard from "./HeaderDashboard";
import MenuDashboard from "./MenuDashboard";

const Dash = () => {
  return (
    <div class="wrapper">
      <HeaderDashboard />
      <MenuDashboard />
      <Dashboard />
    </div>
  );
};
export default Dash;
