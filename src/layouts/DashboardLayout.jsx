import React, { useState } from "react";
import { NavLink, Outlet } from "react-router";
import {
  FiMenu,
  FiX,
  FiBell,
  FiChevronDown,
  FiHome,
  FiSettings,
  FiHelpCircle,
  FiLogOut,
  FiTruck,
  FiFileText,
  FiShoppingBag,
  FiCreditCard,
  FiMap,
} from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import Logo from "../components/Logo";
import UseAuth from "../hooks/UseAuth";

const DashboardLayout = () => {
  const { user, logoutUser } = UseAuth();
  const [open, setOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const generalMenu = [
    { icon: <FiSettings />, label: "Settings", path: "/settings" },
    { icon: <FiHelpCircle />, label: "Help", path: "/help" },
    { icon: <FiLogOut />, label: "Logout", onclick: logoutUser },
  ];

  return (
    <div className="min-h-screen w-full bg-[#F5F7F5] relative">

      {/* ============================
           TOP NAVBAR (FIXED)
      ============================= */}
      <header className="w-full fixed top-0 left-0 bg-white border-b border-gray-300 h-[70px] flex items-center justify-between px-6 z-50">
        
        {/* Left: Logo + Toggle */}
        <div className="flex items-center gap-4">

          {/* Sidebar Toggle (Desktop) */}
          <button
            className="text-xl hidden md:block"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>

          {/* Mobile Sidebar Toggle */}
          <button
            className="text-xl md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Logo inside Navbar */}
          <Logo />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <FiBell className="text-xl" />

          <div className="flex items-center gap-2">
            <img
              src={user.photoURL}
              alt="user"
              className="w-10 h-10 rounded-full border border-gray-300"
            />
            <div className="text-right leading-tight hidden md:block">
              <p className="font-semibold text-sm">{user.displayName}</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
            <FiChevronDown className="text-lg hidden md:block" />
          </div>
        </div>
      </header>

      <div className="flex pt-[40px]">

        {/* =============
             SIDEBAR 
        =================*/}
        <div
          className={`
            bg-white border-r border-gray-300 px-4 py-5 flex flex-col transition-all duration-300
            ${open ? "w-[250px]" : "w-[80px]"}
            max-md:fixed max-md:top-[70px] max-md:left-0 max-md:h-full max-md:z-40
            max-md:transition-transform max-md:duration-300
            ${mobileOpen ? "max-md:translate-x-0" : "max-md:-translate-x-full"}
          `}
        >
          <nav className="flex-1 space-y-1 text-gray-700 mt-5">
            {open && <div className="pb-3 text-xs text-gray-500">MENU</div>}

            {/* Dashboard */}
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                `
                flex items-center gap-3 px-4 py-3 rounded-lg transition-all 
                ${isActive ? "bg-[#E7F4D8] font-semibold" : "hover:bg-gray-100"}
                ${!open ? "justify-center px-2 py-4" : ""}
                `
              }
            >
              <FiHome className="text-xl" />
              {open && "Dashboard"}
            </NavLink>

            {/* Menu Items */}
            {[
              { icon: <TbTruckDelivery />, label: "My Parcels", path: "/dashboard/my-parcels" },
              { icon: <FiTruck />, label: "Deliveries", path: "/deliveries" },
              { icon: <FiFileText />, label: "Invoices", path: "/invoices" },
              { icon: <FiShoppingBag />, label: "Stores", path: "/stores" },
              { icon: <FiCreditCard />, label: "Pricing Plan", path: "/pricing" },
              { icon: <FiMap />, label: "Coverage Area", path: "/coverage" },
            ].map((item, i) => (
              <NavLink
                key={i}
                to={item.path}
                end
                className={({ isActive }) =>
                  `
                  flex items-center gap-3 px-4 py-3 rounded-lg transition-all
                  ${isActive ? "bg-[#E7F4D8] font-semibold" : "hover:bg-gray-100"}
                  ${!open && "justify-center px-2 py-4 border border-gray-300 bg-white shadow-sm"}
                  `
                }
              >
                <span className="text-xl">{item.icon}</span>
                {open && item.label}
              </NavLink>
            ))}

            {/* General */}
            {open && <div className="pt-6 text-xs text-gray-500">GENERAL</div>}

            {generalMenu.map((item, i) =>
              item.path ? (
                <NavLink
                  key={i}
                  to={item.path}
                  end
                  className={({ isActive }) =>
                    `
                    flex items-center gap-3 px-4 py-3 rounded-lg transition-all
                    ${isActive ? "bg-gray-200 font-semibold" : "hover:bg-gray-100"}
                    ${!open && "justify-center px-2 py-4 border border-gray-300 bg-white shadow-sm"}
                    `
                  }
                >
                  <span className="text-xl">{item.icon}</span>
                  {open && item.label}
                </NavLink>
              ) : (
                <button
                  key={i}
                  onClick={item.onclick}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left
                    hover:bg-red-50 text-red-600
                    ${!open && "justify-center px-2 py-4 border border-gray-300 bg-white shadow-sm"}
                  `}
                >
                  <span className="text-xl">{item.icon}</span>
                  {open && item.label}
                </button>
              )
            )}
          </nav>
        </div>

        {/* ============================
             MAIN CONTENT
        ============================= */}
        <div className="flex-1 p-6 md:p-8">
          <div className="bg-white rounded-3xl p-5 md:p-8 shadow-sm border border-gray-300 min-h-[80vh]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
