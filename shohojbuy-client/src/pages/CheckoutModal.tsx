import { useState } from "react";
import { X } from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CheckoutModal = ({ isOpen, onClose }: CheckoutModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.address) {
      alert("Please fill all fields");
      return;
    }

    setSubmitted(true);
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        onClick={onClose}
        aria-label="Close modal overlay"
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div
          className="relative w-full max-w-md p-6 rounded-xl 
          bg-white/10 backdrop-blur-md border-2 
          border-transparent bg-clip-padding 
          shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] 
          border-gradient-to-tr from-[#18dcff] to-[#a855f7] 
          text-white"
          style={{
            borderImage: "linear-gradient(to top right, #18dcff, #a855f7) 1",
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-white hover:text-pink-400 transition-all"
            aria-label="Close checkout modal"
          >
            <X size={24} />
          </button>

          {/* Title */}
          <h2 className="text-2xl font-semibold mb-4 text-center drop-shadow-md">
            Checkout
          </h2>

          {/* Submitted Message */}
          {submitted ? (
            <div className="text-green-300 font-semibold text-center space-y-2">
              <p>Thank you for your order, {formData.name}!</p>
              <p>
                We'll contact you at{" "}
                <span className="text-cyan-300">{formData.email}</span>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1 text-white"
                >
                  Name
                </label>
                <div className="rounded-md p-[2px] bg-gradient-to-r from-[#18dcff] to-[#a855f7]">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-md px-3 py-2 bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-[#18dcff]"
                    required
                  />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1 text-white"
                >
                  Email
                </label>
                <div className="rounded-md p-[2px] bg-gradient-to-r from-[#18dcff] to-[#a855f7]">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-md px-3 py-2 bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-[#18dcff]"
                    required
                  />
                </div>
              </div>

              {/* Address Input */}
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium mb-1 text-white"
                >
                  Address
                </label>
                <div className="rounded-md p-[2px] bg-gradient-to-r from-[#18dcff] to-[#a855f7]">
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows={3}
                    className="w-full rounded-md px-3 py-2 bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-[#18dcff]"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2 mt-2 rounded-md font-semibold 
                  bg-gradient-to-r from-[#18dcff] to-[#a855f7] 
                  text-white shadow-lg 
                  hover:shadow-[0_0_12px_2px_rgba(168,85,247,0.6)] 
                  active:translate-y-[2px] active:shadow-none 
                  transition-all duration-200 ease-in-out"
              >
                Submit Order
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default CheckoutModal;
