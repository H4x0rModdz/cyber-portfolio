"use client";

import React from 'react';
import { motion } from "framer-motion";
import AnimatedText from './AnimatedText';

export default function HeroSection() {
  return (
      <section className="h-screen bg-black flex flex-col items-center justify-center text-white px-4">
      {/* Título principal */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-8xl font-bold text-center"
      >
        <AnimatedText /> <br className="hidden md:block" /> made in Brazil.
      </motion.h1>

      {/* Subtexto */}
      <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-lg md:text-xl text-gray-400 mt-6 max-w-4xl"
      >
      I'm Lucas, a developer with over <span className="font-bold text-purple-600">3+ years</span> of experience,
      passionate about building <span className="font-bold text-purple-600">innovative</span> and <span className="font-bold text-purple-600">scalable</span> solutions.
      I'm the <span className="font-bold text-purple-600">CEO of Red-Shark</span>, an open-source social media platform designed to <span className="font-bold text-purple-600">prioritize </span>
      user <span className="font-bold text-purple-600">privacy</span>, <span className="font-bold text-purple-600">security</span>, and <span className="font-bold text-purple-600">community-driven development</span>.
      </motion.p>
    </section>
  );
}