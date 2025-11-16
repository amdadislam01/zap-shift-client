import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How does this posture corrector work?",
      answer:
        "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
    },
    {
      question: "Is it suitable for all ages and body types?",
      answer:
        "Yes, it is adjustable and can comfortably fit a wide range of body types and ages.",
    },
    {
      question: "Does it really help with back pain and posture improvement?",
      answer:
        "Many users report decreased back pain and improved posture after consistent use.",
    },
    {
      question: "Does it have smart features like vibration alerts?",
      answer:
        "Some advanced models include vibration reminders to help you maintain proper posture.",
    },
    {
      question: "How will I be notified when the product is back in stock?",
      answer:
        "You can sign up for email alerts to be notified when the product becomes available.",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="w-full py-16 px-4 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#03373D] text-center">
        Frequently Asked Question (FAQ)
      </h2>

      <p className="text-gray-600 text-center mt-3 max-w-2xl">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        Achieve proper alignment, reduce pain, and strengthen your body with ease!
      </p>

      <div className="w-full max-w-5xl mt-10 space-y-3">
        {faqs.map((item, index) => {
          const isOpen = index === openIndex;

          return (
            <div
              key={index}
              className={`rounded-xl border transition-all ${
                isOpen ? "border-teal-600 bg-[#e6f2f3]" : "border-gray-200 bg-white"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full py-4 px-5 sm:px-6 flex items-center justify-between"
              >
                <span
                  className={`font-medium text-base sm:text-lg ${
                    isOpen ? "text-teal-700" : "text-gray-800"
                  }`}
                >
                  {item.question}
                </span>

                {isOpen ? (
                  <FiChevronUp className="text-teal-700 text-xl" />
                ) : (
                  <FiChevronDown className="text-gray-700 text-xl" />
                )}
              </button>

              <div
                className={`px-5 sm:px-6 overflow-hidden transition-all ${
                  isOpen ? "max-h-40 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <button className="mt-10 bg-lime-300 hover:bg-lime-400 text-gray-900 px-7 sm:px-8 py-3 rounded-full font-semibold flex items-center gap-2 shadow-md">
        See More FAQ’s
        <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black text-white flex items-center justify-center">
          →
        </span>
      </button>
    </section>
  );
};

export default FAQ;
