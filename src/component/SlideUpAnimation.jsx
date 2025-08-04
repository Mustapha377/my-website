import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

const SlideUpAnimation = ({ children }) => {
  const variants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <InView>
      {({ inView, ref }) => (
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
        >
          {children}
        </motion.div>
      )}
    </InView>
  );
};

export default SlideUpAnimation;
