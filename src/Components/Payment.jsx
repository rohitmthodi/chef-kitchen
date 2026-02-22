import { X } from "lucide-react";
import { useCartContext } from "../Contexts/CartContext";
import { useState } from "react";

const Payment = () => {
  const {
    showPayment,
    closePayment,
    cart,
    orderType,
    completeOrder,
  } = useCartContext();

  const [paymentMethod, setPaymentMethod] = useState("UPI");

  // Customer details state
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    tableNo: "",
    address: "",
    notes: "",
  });

  if (!showPayment) return null;

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  // basic validation
  const isValid =
    customer.name.trim() &&
    customer.phone.trim().length === 10 &&
    (orderType === "Dine In"
      ? customer.tableNo.trim()
      : customer.address.trim());

  return (
    <div className="fixed inset-0 z-[1000] bg-black/60 flex items-center justify-center">
      <div className="bg-[#1F1D2B] w-[90%] max-w-md rounded-xl p-6 text-white relative overflow-y-auto max-h-[95vh]">

        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Payment</h2>
          <X
            className="cursor-pointer text-gray-400 hover:text-white"
            onClick={closePayment}
          />
        </div>

        {/* Order Info */}
        <div className="mt-3 text-sm text-gray-400">
          <p>
            Order Type :{" "}
            <span className="text-blue-500 font-medium">{orderType}</span>
          </p>
        </div>

        {/* CUSTOMER DETAILS */}
        <div className="mt-5 space-y-3">
          <h3 className="text-sm font-semibold">Customer Details</h3>

          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            value={customer.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-[#2a273d] outline-none"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            value={customer.phone}
            onChange={handleChange}
            maxLength={10}
            className="w-full px-4 py-2 rounded-lg bg-[#2a273d] outline-none"
          />

          {orderType === "Dine In" ? (
            <input
              type="text"
              name="tableNo"
              placeholder="Table Number *"
              value={customer.tableNo}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-[#2a273d] outline-none"
            />
          ) : (
            <textarea
              name="address"
              placeholder="Delivery Address *"
              rows={2}
              value={customer.address}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-[#2a273d] outline-none"
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email (optional)"
            value={customer.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-[#2a273d] outline-none"
          />

          <textarea
            name="notes"
            placeholder="Special Instructions (optional)"
            rows={2}
            value={customer.notes}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-[#2a273d] outline-none"
          />
        </div>

        {/* Payment Methods */}
        <div className="mt-5 space-y-3">
          <p className="text-sm font-semibold">Select Payment Method</p>

          {["UPI", "Card", "Cash"].map((method) => (
            <label
              key={method}
              className={`flex items-center justify-between border rounded-lg px-4 py-3 cursor-pointer transition
                ${
                  paymentMethod === method
                    ? "border-[#F99147] bg-[#2a273d]"
                    : "border-gray-500/40"
                }`}
            >
              <span>{method}</span>
              <input
                type="radio"
                name="payment"
                value={method}
                checked={paymentMethod === method}
                onChange={() => setPaymentMethod(method)}
                className="accent-[#F99147]"
              />
            </label>
          ))}
        </div>

        {/* Total */}
        <div className="border-t border-gray-600 mt-5 pt-4 flex justify-between font-semibold">
          <p>Total Payable</p>
          <p>$ {total}</p>
        </div>

        {/* Actions */}
        <button
          disabled={!isValid}
          onClick={() => completeOrder(paymentMethod, customer)}
          className={`mt-5 w-full py-2 rounded-lg shadow-2xl font-semibold
            ${
              isValid
                ? "bg-[#F99147] hover:bg-[#f77b22]"
                : "bg-gray-500 cursor-not-allowed"
            }`}
        >
          Confirm Payment
        </button>

        <button
          onClick={closePayment}
          className="mt-2 w-full py-2 rounded-lg border hover:bg-[#22202e] border-gray-500/50 font-semibold"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Payment;
