// import Footer from "@/shared/Footer";
// import Navbar from "@/shared/Navbar";
// import { Outlet } from "react-router";

// const MainLayout = () => {
//   return (
//     <div>
//       <Navbar></Navbar>
//       <div className="min-h-screen">
//         <Outlet></Outlet>
//       </div>
//       <Footer></Footer>
//     </div>
//   );
// };

// export default MainLayout;

import CartSidebar from "@/pages/CartSidebar";
import CheckoutModal from "@/pages/CheckoutModal";
import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";
import { useState } from "react";
import { Outlet } from "react-router";
const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} />
      <CartSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onCheckoutClick={() => {
          setIsSidebarOpen(false);
          setIsModalOpen(true);
        }}
      />
      <CheckoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
