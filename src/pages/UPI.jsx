import React from "react";

const payments = [
  { name: "UPI" },
  { name: "Net Banking" },
  { name: "Bank Cards" },
  { name: "Binance Pay" },
  { name: "Tether (BEP20)" },
  { name: "Tether (TRC20)" },
];

const PaymentCards = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="text-center mb-14">
        <h2 className="text-6xl font-bold text-[#6AFF41]">Quick withdrawal</h2>
        <p className="text-6xl">with local payment options</p>
        <a href="#" className="text-[#6AFF41] hover:underline mt-2 block">
          Show all 24 ›
        </a>
      </div>

      <div className="flex justify-center gap-6 flex-wrap perspective">
        {payments.map((p, i) => (
          <div
            key={i}
            className="group w-48 h-64 bg-[#111] rounded-2xl shadow-lg 
                       flex items-center justify-center cursor-pointer 
                       transition-transform duration-500"
            style={{ transform: "rotateY(15deg)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "rotateY(0deg)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "rotateY(15deg)")
            }
          >
            <p className="text-lg font-semibold text-white text-center px-4">
              {p.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PaymentCards;
