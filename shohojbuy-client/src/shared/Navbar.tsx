// import { useState } from "react";
// import { Menu, X, ShoppingCart } from "lucide-react";
// import logo from "./../assets/logo.svg";
// import { Link, NavLink } from "react-router";
// import { ModeToggle } from "@/components/mode-toggle";

// interface NavbarProps {
//   toggleSidebar: () => void;
// }

// const Navbar = ({ toggleSidebar }: NavbarProps) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinkClass = ({ isActive }: { isActive: boolean }) =>
//     `block px-4 py-2 rounded-md transition duration-300 font-medium ${
//       isActive ? "text-[#18dcff]" : "text-white hover:text-[#18dcff]"
//     }`;

//   return (
//     <nav className="bg-[#1e1b4b] text-white shadow-xl z-50 sticky top-0">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <Link to="/">
//             <div className="flex items-center">
//               <img
//                 className="w-20 sm:w-20 md:w-24 h-auto object-contain"
//                 src={logo}
//                 alt="Shohoj Buy Logo"
//               />
//               <span className="text-xl md:text-2xl font-bold tracking-wider text-white hover:tracking-widest transition-all duration-300">
//                 Shohoj Buy
//               </span>
//             </div>
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8 text-lg">
//             <NavLink to="/" className={navLinkClass}>
//               Home
//             </NavLink>

//             {/* Cart toggle button */}
//             <button
//               onClick={toggleSidebar}
//               className="text-white hover:text-[#18dcff] transition"
//             >
//               <ShoppingCart size={24} />
//             </button>

//             <ModeToggle></ModeToggle>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center gap-3">
//             <ModeToggle></ModeToggle>
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-white hover:text-[#18dcff] focus:outline-none transition"
//             >
//               {isOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden px-4 pt-2 pb-4 bg-[#5e17eb]/90 space-y-1">
//           <NavLink
//             to="/"
//             className={navLinkClass}
//             onClick={() => setIsOpen(false)}
//           >
//             Home
//           </NavLink>

//           {/* Cart button in mobile */}
//           <button
//             onClick={() => {
//               toggleSidebar();
//               setIsOpen(false);
//             }}
//             className="text-white hover:text-[#18dcff] block px-4 py-2 font-medium"
//           >
//             Cart
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import logo from "./../assets/logo.svg";
import { Link, NavLink } from "react-router";
import { ModeToggle } from "@/components/mode-toggle";

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar = ({ toggleSidebar }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-2 rounded-md transition duration-300 font-medium ${
      isActive ? "text-white hover:text-[#18dcff]" : "text-white hover:text-[#18dcff]"
    }`;

  return (
    <nav className="bg-gradient-to-r from-[#1e1b4b] via-[#5e17eb] to-[#18dcff] text-white shadow-xl z-50 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/">
            <div className="flex items-center">
              <img
                className="w-20 sm:w-20 md:w-24 h-auto object-contain"
                src={logo}
                alt="Shohoj Buy Logo"
              />
              <span className="text-xl md:text-2xl font-bold tracking-wider text-white hover:tracking-widest transition-all duration-300">
                Shohoj Buy
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-lg">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            {/* Cart toggle button */}
            <button
              onClick={toggleSidebar}
              className="text-white hover:text-[#18dcff] transition"
            >
              <ShoppingCart size={24} />
            </button>

            <ModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <ModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#18dcff] focus:outline-none transition"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 bg-gradient-to-b from-[#5e17eb] via-[#1e1b4b] to-[#000000] space-y-1">
          <NavLink
            to="/"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>

          {/* Cart button in mobile */}
          <button
            onClick={() => {
              toggleSidebar();
              setIsOpen(false);
            }}
            className="text-white hover:text-[#18dcff] block px-4 py-2 font-medium"
          >
            Cart
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
