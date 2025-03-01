"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card"; 
import Image from "next/image";
import { FaGithub, FaYoutube, FaLinkedin, FaDiscord } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

const words = ["./Lucas.sh", "./Lobo.sh"];

export default function AnimatedTitle() {
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showGradient, setShowGradient] = useState(false);
  const { isEnglish } = useLanguage();

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
    <HoverCard>
      <HoverCardTrigger>
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
                  whiteSpace: "pre",
                  background: showGradient
                    ? "linear-gradient(to left, transparent, #ef4444, transparent)"
                    : "none",
                  backgroundSize: "200% 100%",
                  backgroundPosition: "100% 0",
                  animation: showGradient ? "gradientMove 2s linear forwards" : "none",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                {words[index]}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </HoverCardTrigger>

      <HoverCardContent
        side="bottom"
        sideOffset={8}
        className="w-72 border border-gray-700 bg-black p-4 shadow-lg cursor-default"
      >
        <div className="flex items-center space-x-3 select-none">
          <Image
            src="https://media.licdn.com/dms/image/v2/D4D03AQEoLow2vqn7Qw/profile-displayphoto-shrink_400_400/B4DZUE09DOGkAs-/0/1739542746819?e=1746057600&v=beta&t=EGutHIQk65AYCP9KOm4SaNtJbjvN0rW1OD_SvxaZ_ok"
            alt="Profile Image"
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            <p className="font-semibold text-white mb-1">Lucas Lobo</p>
            <p className="font-semibold text-sm text-white">@H4x0rModdz</p>
            <p className="text-sm text-gray-400">
            {isEnglish ? "Software Engineer" : "Engenheiro de Software"}
            </p>
          </div>
        </div>
        <div className="mt-3 flex space-x-4 text-xl text-white select-none">
          <a
            href="https://github.com/H4x0rModdz"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.youtube.com/@wantedeveloper"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-500 transition"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-lobo-917aba209/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://discord.gg/2DPjDM8nHx"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-500 transition"
          >
            <FaDiscord />
          </a>
        <p className="text-xs text-gray-500 mt-[1px]">
        {isEnglish ? "Joined 07/01/2018" : "Entrou 07/01/2018"}
        </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
