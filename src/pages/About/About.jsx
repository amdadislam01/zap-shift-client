import { useState } from "react";

const About = () => {
  const [active, setActive] = useState("Story");

  const tabs = ["Story", "Mission", "Success", "Team & Others"];

  return (
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-10 pt-20 pb-16 mt-12">
      <div className="w-[95%] sm:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[72%] bg-white rounded-2xl px-6 sm:px-10 py-12 md:py-16">

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          About Us
        </h1>

        <p className="text-gray-600 max-w-2xl text-sm sm:text-base leading-relaxed">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
          From personal packages to business shipments — we deliver on time, every time.
        </p>

        <div className="w-full border-t border-gray-300 my-8"></div>

        <div className="flex gap-8 text-lg font-medium mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`transition cursor-pointer ${
                active === tab ? "text-green-700 font-bold" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="text-gray-700 space-y-6 leading-relaxed text-[15px] sm:text-base">
          {/* Story */}
          {active === "Story" && (
            <>
              <p>
                We started with a simple promise — to make parcel delivery fast, reliable,
                and stress-free. Over the years, our commitment to real-time tracking,
                efficient logistics, and customer-first service has made us a trusted
                partner for thousands. Whether it's a personal gift or a time-sensitive
                business delivery, we ensure it reaches its destination — on time, every time.
              </p>

              <p>
                We started with a simple promise — to make parcel delivery fast, reliable,
                and stress-free. Over the years, our commitment to real-time tracking,
                efficient logistics, and customer-first service has made us a trusted
                partner for thousands. Whether it's a personal gift or a time-sensitive
                business delivery, we ensure it reaches its destination — on time, every time.
              </p>

              <p>
                We started with a simple promise — to make parcel delivery fast, reliable,
                and stress-free. Over the years, our commitment to real-time tracking,
                efficient logistics, and customer-first service has made us a trusted
                partner for thousands. Whether it's a personal gift or a time-sensitive
                business delivery, we ensure it reaches its destination — on time, every time.
              </p>
            </>
          )}

          {/* MISSION */}
          {active === "Mission" && (
            <>
              <p>
                Our mission is to redefine the delivery experience by providing world-class
                logistics with transparency, speed, and reliability. We aim to empower
                individuals and businesses with seamless parcel solutions.
              </p>
              <p>
                We continue to innovate — ensuring faster deliveries, better tracking, and
                a smoother user experience.
              </p>
              <p>
                Our mission is to redefine the delivery experience by providing world-class
                logistics with transparency, speed, and reliability. We aim to empower
                individuals and businesses with seamless parcel solutions.
              </p>
            </>
          )}

          {/* SUCCESS */}
          {active === "Success" && (
            <>
              <p>
                Over the years, we have successfully completed millions of deliveries with
                unmatched accuracy. We take pride in our customer satisfaction and consistent
                performance.
              </p>
              <p>
                Our success comes from our customers’ trust and our team’s dedication.
              </p>
              <p>
                Our mission is to redefine the delivery experience by providing world-class
                logistics with transparency, speed, and reliability. We aim to empower
                individuals and businesses with seamless parcel solutions.
              </p>
            </>
          )}

          {/* TEAM */}
          {active === "Team & Others" && (
            <>
              <p>
                Behind every successful delivery is a team of passionate professionals —
                from logistics experts to customer support heroes.
              </p>
              <p>
                We work together to ensure each package is handled with care and delivered
                on time.
              </p>
              <p>
                Our mission is to redefine the delivery experience by providing world-class
                logistics with transparency, speed, and reliability. We aim to empower
                individuals and businesses with seamless parcel solutions.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
