import React from "react";
import { motion } from "framer-motion";

const SlideInMenuItem = ({ children, delay = 0 }) => (
  <motion.li
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -30 }}
    transition={{ duration: 0.4, delay }}
    className="text-white text-lg px-4 py-2"
  >
    {children}
  </motion.li>
);

export default SlideInMenuItem;
