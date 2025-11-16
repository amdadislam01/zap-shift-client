import React from "react";
import service from "../assets/service.png";

const ServicesWrok = () => {
  const services = [
    {
      title: "Express & Standard Delivery",
      text: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
      icon: service,
      highlight: false,
    },
    {
      title: "Nationwide Delivery",
      text: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
      icon: service,
      highlight: true,
    },
    {
      title: "Fulfillment Solution",
      text: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
      icon: service,
      highlight: false,
    },
    {
      title: "Cash on Home Delivery",
      text: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
      icon: service,
      highlight: false,
    },
    {
      title: "Corporate Service / Contract In Logistics",
      text: "Customized corporate services which includes warehouse and inventory management support.",
      icon: service,
      highlight: false,
    },
    {
      title: "Parcel Return",
      text: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
      icon: service,
      highlight: false,
    },
  ];

  return (
    <section className="w-full flex justify-center px-4 sm:px-6 lg:px-10 py-10">
      <div className="w-[95%] sm:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[72%] bg-[#073B3A] rounded-3xl py-16 px-6 sm:px-10">
        <h2 className="text-3xl font-bold text-white text-center">
          Our Services
        </h2>
        <p className="text-gray-200 text-center mt-2 max-w-2xl mx-auto">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {services.map((item, i) => (
            <div
              key={i}
              className={`p-8 rounded-2xl shadow-sm border transition-all text-center ${
                item.highlight
                  ? "bg-lime-300 border-lime-400"
                  : "bg-white border-gray-100 hover:shadow-md"
              }`}
            >
              <div className="flex justify-center mb-4">
                <img src={item.icon} alt="icon" className="w-16 bg-gradient-to-b from-[#EEEDFC] to-[#fafafa] p-3 rounded-full" />
              </div>
              <h3 className="font-bold text-gray-800 text-lg mb-2">
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

export default ServicesWrok;
