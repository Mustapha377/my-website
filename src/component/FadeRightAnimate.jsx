import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

const FadeRightAnimate = ({ children }) => {
  const variants = {
    hidden: { opacity: 0, x: -20, y: 20 }, // Start from bottom-left
    visible: { opacity: 1, x: 0, y: 0 }, // Move to center (top-right relative)
  };

  return (
    <InView triggerOnce={false}>
      {({ inView, ref }) => (
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            type: "tween",
        
          }}
          className="relative"
        >
          {children}
        </motion.div>
      )}
    </InView>
  );
};

export default FadeRightAnimate;