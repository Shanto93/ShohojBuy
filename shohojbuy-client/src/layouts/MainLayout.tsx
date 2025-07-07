import Navbar from "@/shared/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
