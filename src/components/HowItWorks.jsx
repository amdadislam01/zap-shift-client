import React from "react";
import bokkingicon from "../assets/bookingIcon.png";

const HowItWorks = () => {
  const items = [
    {
      title: "Booking Pick & Drop",
      text: "From personal packages to business shipments — we deliver on time, every time.",
      icon: bokkingicon,
    },
    {
      title: "Cash On Delivery",
      text: "From personal packages to business shipments — we deliver on time, every time.",
      icon: bokkingicon,
    },
    {
      title: "Delivery Hub",
      text: "From personal packages to business shipments — we deliver on time, every time.",
      icon: bokkingicon,
    },
    {
      title: "Booking SME & Corporate",
      text: "From personal packages to business shipments — we deliver on time, every time.",
      icon: bokkingicon,
    },
  ];

  return (
    <section className="w-full flex justify-center px-4 sm:px-6 lg:px-10 py-10">
      <div className="w-[95%] sm:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[72%]">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center md:text-left">
          How it Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <img src={item.icon} className="w-14 mb-4" alt="icon" />
              <h3 className="font-semibold text-gray-800 text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
