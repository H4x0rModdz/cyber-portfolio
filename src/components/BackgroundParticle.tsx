"use client";

import React, { useRef, useEffect } from "react";

const BackgroundParticle: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let animationFrameId: number;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const safeCanvas = canvas;
    const safeCtx = ctx;

    safeCanvas.width = window.innerWidth;
    safeCanvas.height = window.innerHeight;

    class Particle {
      x: number;
      y: number;
      radius: number;
      speedX: number;
      speedY: number;

      constructor() {
        this.x = Math.random() * safeCanvas.width;
        this.y = Math.random() * safeCanvas.height;
        this.radius = Math.random() * 2 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0) this.x = safeCanvas.width;
        if (this.x > safeCanvas.width) this.x = 0;
        if (this.y < 0) this.y = safeCanvas.height;
        if (this.y > safeCanvas.height) this.y = 0;
      }
      draw() {
        safeCtx.beginPath();
        safeCtx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        safeCtx.fillStyle = "white";
        safeCtx.fill();
      }
    }

    const particlesArray: Particle[] = [];
    const numParticles = 100;
    const maxDistance = 100;

    for (let i = 0; i < numParticles; i++) {
      particlesArray.push(new Particle());
    }

    const connectParticles = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a + 1; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            safeCtx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            safeCtx.lineWidth = 1;
            safeCtx.beginPath();
            safeCtx.moveTo(particlesArray[a].x, particlesArray[a].y);
            safeCtx.lineTo(particlesArray[b].x, particlesArray[b].y);
            safeCtx.stroke();
          }
        }
      }
    };

    const animate = () => {
      safeCtx.fillStyle = "rgba(0, 0, 0, 0.1)";
      safeCtx.fillRect(0, 0, safeCanvas.width, safeCanvas.height);
      particlesArray.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      safeCanvas.width = window.innerWidth;
      safeCanvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        display: "block",
      }}
    />
  );
};

export default BackgroundParticle;
