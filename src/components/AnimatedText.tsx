"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = [
  "Software Engineer",
  "Full Stack Developer",
];

export default function AnimatedTitle() {
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showGradient, setShowGradient] = useState(false);

  useEffect(() => {
    const typingDuration = words[index].length * 100;
    const pauseAfterTyping = 1000;
    const gradientDuration = 2000;

    setIsTyping(true);
    setShowGradient(false);

    const typingTimer = setTimeout(() => {
      setIsTyping(false);
      setShowGradient(true);
    }, typingDuration + pauseAfterTyping);

    const switchTimer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, typingDuration + pauseAfterTyping + gradientDuration);

    return () => {
      clearTimeout(typingTimer);
      clearTimeout(switchTimer);
    };
  }, [index]);

  return (
    <div className="relative inline-block font-bold">
      <AnimatePresence mode="wait">
        {isTyping ? (
          <motion.span
            key={`typing-${words[index]}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: "inline-block", color: "#ffffff" }}
          >
            {words[index].split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: i * 0.1 }}
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.span>
        ) : (
          <motion.span
            key={`gradient-${words[index]}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "inline-block",
              whiteSpace: "pre-wrap",
              background: showGradient
                ? "linear-gradient(to left, transparent, #ef4444, transparent)"
                : "none",
              backgroundSize: "200% 100%",
              backgroundPosition: "100% 0",
              animation: showGradient ? "gradientMove 2s linear forwards" : "none",
              WebkitBackgroundClip: "text",
              color: "transparent",
              wordWrap: showGradient ? "break-word" : "normal"
            }}
          >
            {words[index]}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}