import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import welcome from "../assets/welcome-img.jpg";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen overflow-hidden">
      {/* BG-IMAGE */}
      <motion.img
        src={welcome}
        alt="Restaurant"
        className="absolute inset-0 h-full w-full object-cover object-center"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-3 text-orange-400 uppercase tracking-[5px] cursor-default"
        >
          Welcome To
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold cursor-default"
        >
          Chef Kitchen
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 max-w-2xl text-lg text-gray-200 cursor-default"
        >
          Discover handcrafted dishes, fresh ingredients, and unforgettable
          dining experiences delivered straight to your table.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/home/menu-cards")}
          className="mt-10 rounded-2xl bg-[#B65E2E] text-white px-8 py-4 text-lg font-semibold cursor-pointer transition-all duration-300 hover:bg-[#C76A35] hover:shadow-[0_0_25px_rgba(182,94,46,0.4)]"
        >
          Explore Menu
        </motion.button>
      </div>
    </div>
  );
};

export default Welcome;