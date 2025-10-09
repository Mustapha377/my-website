import React from "react";
import { useEffect, useState } from "react";

const AnimatedHeading = ({ text }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={`inline-block ${mounted ? "animate-pull-down" : ""}`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {char}
        </span>
      ))}
    </>
  );
};

export default AnimatedHeading;

