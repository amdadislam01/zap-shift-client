import React, { useState } from "react";
import { Link, Outlet } from "react-router";
import {
  FiMenu,
  FiX,
  FiTruck,
  FiFileText,
  FiHome,
  FiSettings,
  FiLogOut,
  FiHelpCircle,
  FiBell,
  FiChevronDown,
  FiMap,
  FiShoppingBag,
  FiCreditCard,
} from "react-icons/fi";
import Logo from "../components/Logo";

const DashboardLayout = () => {
  const [open, setOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-white flex relative">

      {/* ========= OVERLAY  ========= */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}

      {/* ========= SIDEBAR ========= */}
      <div
        className={`
          bg-white border-r border-gray-300 px-4 py-5 flex flex-col transition-all duration-300
          ${open ? "w-[250px]" : "w-[80px]"}
          
          /* Mobile behavior */
          max-md:fixed max-md:top-0 max-md:left-0 max-md:h-full max-md:z-50
          max-md:transition-transform max-md:duration-300
          ${mobileOpen ? "max-md:translate-x-0" : "max-md:-translate-x-full"}
        `}
      >
        <Logo />

        {/* Menu */}
        <nav className="flex-1 space-y-1 text-gray-700 mt-10">
          {open && <div className="pb-6 text-xs text-gray-500">MENU</div>}

          <Link
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all 
              ${open ? "bg-[#E7F4D8]" : "justify-center bg-[#E7F4D8] px-2 py-4"}
            `}
          >
            <FiHome className="text-xl" />
            {open && "Dashboard"}
          </Link>

          {[
            { icon: <FiTruck />, label: "Deliveries" },
            { icon: <FiFileText />, label: "Invoices" },
            { icon: <FiShoppingBag />, label: "Stores" },
            { icon: <FiCreditCard />, label: "Pricing Plan" },
            { icon: <FiMap />, label: "Coverage Area" },
          ].map((item, i) => (
            <Link
              key={i}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-all
                ${
                  !open &&
                  "justify-center px-2 py-4 border border-gray-300 bg-white shadow-sm"
                }
              `}
            >
              <span className="text-xl">{item.icon}</span>
              {open && item.label}
            </Link>
          ))}

          {open && <div className="pt-6 text-xs text-gray-500">GENERAL</div>}

          {[
            { icon: <FiSettings />, label: "Settings" },
            { icon: <FiHelpCircle />, label: "Help" },
            { icon: <FiLogOut />, label: "Logout" },
          ].map((item, i) => (
            <Link
              key={i}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition-all
                ${
                  !open &&
                  "justify-center px-2 py-4 border border-gray-300 bg-white shadow-sm"
                }
              `}
            >
              <span className="text-xl">{item.icon}</span>
              {open && item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* ========= MAIN AREA ========= */}
      <div className="flex-1 flex flex-col bg-[#F5F7F5]">
        <header className="w-full bg-white border-b border-gray-300 h-[70px] flex items-center justify-between px-6 sticky top-0 z-30">
          <div className="flex items-center gap-3">

            {/* Mobile  */}
            <button
              className="text-xl md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <FiX /> : <FiMenu />}
            </button>

            {/* Desktop  */}
            <button
              className="text-xl hidden md:block"
              onClick={() => setOpen(!open)}
            >
              {open ? <FiX /> : <FiMenu />}
            </button>

            <span className="text-lg font-semibold">Dashboard Overview</span>
          </div>

          <div className="flex items-center gap-4">
            <FiBell className="text-xl" />
            <div className="flex items-center gap-2">
              <img
                src="/profile.png"
                alt="user"
                className="w-10 h-10 rounded-full border border-gray-300"
              />
              <div className="text-right leading-tight hidden md:block">
                <p className="font-semibold text-sm">Zahid Hossain</p>
                <p className="text-xs text-gray-500">Admin</p>
              </div>
              <FiChevronDown className="text-lg hidden md:block" />
            </div>
          </div>
        </header>

        {/* CONTENT */}
        <div className="px-4 md:px-8 py-6">
          <div
            className="bg-white rounded-3xl p-5 md:p-8 shadow-sm border border-gray-300"
            style={{ minHeight: "calc(100vh - 120px)" }}
          >
            <div className="flex justify-end mb-6">
              <Link
                to="/add-parcel"
                className="bg-[#C9EA83] hover:bg-[#BFE46E] transition text-gray-700 font-semibold px-6 py-3 rounded-lg shadow-sm"
              >
                + Add Parcel
              </Link>
            </div>

            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
