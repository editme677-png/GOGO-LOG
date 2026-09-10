import React, { useEffect, useRef, useState } from 'react';

/**
 * RedBlackMotionBackground
 * 
 * Directly modeled from the provided motion graphics reference video:
 * - Sinuous glowing red neon ribbons and undulating silk waves
 * - Dynamic streaming red embers, sparks, and stardust particles
 * - Sculpted obsidian/carbon curves with crimson laser-sharp edge highlights
 * - High-tech diagonal stippled/dot grid patterns on corner wings
 * - Ambient ruby/crimson radial glow pools that breathe softly
 * - Twinkling 4-point star sparkles (matching the video watermark/sparkle)
 */
export const RedBlackMotionBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [motionIntensity, setMotionIntensity] = useState<'normal' | 'cinematic'>('cinematic');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track mouse coordinates for subtle fluid parallax
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.width = window.innerWidth * dpr;
      height = canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize);
    handleResize();

    // Particle System (Embers, Sparks, and Light Nodes from video)
    const PARTICLE_COUNT = Math.min(Math.floor(window.innerWidth / 14), 130);
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseAlpha: number;
      alpha: number;
      color: string;
      pulseSpeed: number;
      phase: number;
      orbitOffset: number;
      orbitSpeed: number;
      isSpark: boolean;
    }

    const colors = [
      '#ff1e42', // Vibrant crimson
      '#ff3366', // Hot scarlet
      '#ff5577', // Soft red
      '#ff002b', // Pure laser red
      '#ffffff', // Spark white core
      '#ffa3b1', // Pastel glow core
    ];

    const particles: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const isSpark = Math.random() < 0.25;
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.45) * (isSpark ? 1.4 : 0.6),
        vy: (Math.random() * -0.8 - 0.2) * (isSpark ? 1.5 : 0.8),
        size: isSpark ? Math.random() * 2.8 + 1.2 : Math.random() * 2 + 1,
        baseAlpha: Math.random() * 0.6 + 0.25,
        alpha: 0.5,
        color: isSpark ? '#ffffff' : colors[Math.floor(Math.random() * colors.length)],
        pulseSpeed: Math.random() * 0.04 + 0.015,
        phase: Math.random() * Math.PI * 2,
        orbitOffset: Math.random() * 60 + 20,
        orbitSpeed: (Math.random() - 0.5) * 0.02,
        isSpark,
      });
    }

    // High-speed light streaks (darting embers from video 00:01-00:03)
    interface Streak {
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      alpha: number;
      width: number;
    }
    const streaks: Streak[] = Array.from({ length: 6 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      length: Math.random() * 120 + 60,
      speed: Math.random() * 3 + 2,
      angle: -Math.PI / 4 + (Math.random() - 0.5) * 0.2,
      alpha: Math.random() * 0.5 + 0.2,
      width: Math.random() * 2 + 1,
    }));

    let time = 0;

    // Render loop
    const render = () => {
      time += 0.012;

      // Mouse smoothing
      mouseX += (targetMouseX - mouseX) * 0.03;
      mouseY += (targetMouseY - mouseY) * 0.03;
      const mouseOffsetX = (mouseX - window.innerWidth / 2) * 0.05;
      const mouseOffsetY = (mouseY - window.innerHeight / 2) * 0.05;

      const w = window.innerWidth;
      const h = window.innerHeight;

      // 1. Clear with deep carbon-black gradient base (NOT flat black, rich obsidian with red undertone)
      const bgGrad = ctx.createRadialGradient(
        w * 0.3 + mouseOffsetX,
        h * 0.4 + mouseOffsetY,
        w * 0.05,
        w * 0.5,
        h * 0.5,
        Math.max(w, h) * 0.85
      );
      bgGrad.addColorStop(0, '#1a0307');   // Deepest dark crimson glow center
      bgGrad.addColorStop(0.35, '#0e0204'); // Dark ruby black
      bgGrad.addColorStop(0.7, '#070102');  // Obsidian black
      bgGrad.addColorStop(1, '#030001');    // Pure carbon border
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      // 2. Ambient Red Glow Pools (Corners and Curves from video)
      // Top-Left intense red flare
      const tlGlow = ctx.createRadialGradient(0, 0, 10, w * 0.15, h * 0.15, Math.min(w, h) * 0.65);
      const tlPulse = 0.35 + Math.sin(time * 1.5) * 0.08;
      tlGlow.addColorStop(0, `rgba(255, 20, 50, ${tlPulse})`);
      tlGlow.addColorStop(0.4, 'rgba(180, 10, 30, 0.18)');
      tlGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = tlGlow;
      ctx.fillRect(0, 0, w * 0.8, h * 0.8);

      // Bottom-Right glowing pool
      const brGlow = ctx.createRadialGradient(w, h, 20, w * 0.85, h * 0.85, Math.min(w, h) * 0.7);
      const brPulse = 0.3 + Math.cos(time * 1.2) * 0.06;
      brGlow.addColorStop(0, `rgba(255, 30, 60, ${brPulse})`);
      brGlow.addColorStop(0.45, 'rgba(150, 8, 25, 0.15)');
      brGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = brGlow;
      ctx.fillRect(w * 0.2, h * 0.2, w, h);

      // Center floating energy pool
      const centerGlow = ctx.createRadialGradient(
        w * 0.5 + Math.sin(time * 0.8) * 80,
        h * 0.55 + Math.cos(time * 0.9) * 60,
        0,
        w * 0.5,
        h * 0.55,
        Math.min(w, h) * 0.45
      );
      centerGlow.addColorStop(0, 'rgba(230, 20, 45, 0.12)');
      centerGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = centerGlow;
      ctx.fillRect(0, 0, w, h);

      // 3. Draw Sinuous Red Neon Waves & Silky Ribbons (Reference from video frames 00:00-00:06)
      const drawRibbon = (
        yBaseRatio: number,
        amplitude: number,
        freq: number,
        speed: number,
        strokeColor: string,
        fillGradientColors: [string, string],
        thickness: number,
        glowBlur: number,
        phaseShift: number
      ) => {
        ctx.save();
        ctx.beginPath();

        const yBase = h * yBaseRatio;
        const pointsCount = 30;
        const step = w / pointsCount;

        // Top line
        const topPoints: { x: number; y: number }[] = [];
        for (let i = 0; i <= pointsCount; i++) {
          const x = i * step;
          const normalX = x / w;
          // Harmonic wave math: sine + cosine harmonics + mouse offset
          const wave =
            Math.sin(normalX * freq * Math.PI * 2 + time * speed + phaseShift) * amplitude +
            Math.cos(normalX * (freq * 0.5) * Math.PI * 2 - time * (speed * 0.7)) * (amplitude * 0.4) +
            Math.sin(time * 0.5 + normalX * 4) * 15;
          const y = yBase + wave + mouseOffsetY * (1 - normalX);
          topPoints.push({ x, y });
        }

        ctx.moveTo(topPoints[0].x, topPoints[0].y);
        for (let i = 1; i < topPoints.length - 1; i++) {
          const xc = (topPoints[i].x + topPoints[i + 1].x) / 2;
          const yc = (topPoints[i].y + topPoints[i + 1].y) / 2;
          ctx.quadraticCurveTo(topPoints[i].x, topPoints[i].y, xc, yc);
        }
        ctx.lineTo(topPoints[topPoints.length - 1].x, topPoints[topPoints.length - 1].y);

        // Bottom line of ribbon
        const ribbonHeight = thickness + Math.sin(time * speed * 1.2) * 12;
        ctx.lineTo(w, h + 50);
        ctx.lineTo(0, h + 50);
        ctx.closePath();

        // Fill ribbon
        const ribbonGrad = ctx.createLinearGradient(0, yBase - amplitude, 0, yBase + ribbonHeight + amplitude);
        ribbonGrad.addColorStop(0, fillGradientColors[0]);
        ribbonGrad.addColorStop(1, fillGradientColors[1]);
        ctx.fillStyle = ribbonGrad;
        ctx.fill();

        // Top Glowing Neon Edge Stroke (Laser-sharp red neon contour line)
        ctx.beginPath();
        ctx.moveTo(topPoints[0].x, topPoints[0].y);
        for (let i = 1; i < topPoints.length - 1; i++) {
          const xc = (topPoints[i].x + topPoints[i + 1].x) / 2;
          const yc = (topPoints[i].y + topPoints[i + 1].y) / 2;
          ctx.quadraticCurveTo(topPoints[i].x, topPoints[i].y, xc, yc);
        }
        ctx.lineTo(topPoints[topPoints.length - 1].x, topPoints[topPoints.length - 1].y);

        ctx.shadowColor = strokeColor;
        ctx.shadowBlur = glowBlur;
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = Math.max(1.8, thickness * 0.08);
        ctx.stroke();

        ctx.restore();
      };

      // Layer 1: Deep background dark ruby ribbon (smooth and slow)
      drawRibbon(
        0.78,
        45,
        1.1,
        0.5,
        'rgba(255, 30, 60, 0.45)',
        ['rgba(120, 8, 20, 0.35)', 'rgba(20, 2, 5, 0.8)'],
        55,
        12,
        0
      );

      // Layer 2: Glossy obsidian wave with sharp crimson edge (bottom curve from video 00:00, 00:04)
      drawRibbon(
        0.86,
        60,
        1.3,
        0.7,
        '#ff1a3d',
        ['rgba(15, 3, 5, 0.85)', 'rgba(5, 1, 2, 0.98)'],
        70,
        18,
        Math.PI * 0.4
      );

      // Layer 3: Vibrant middle red silk ribbon (sinuous wave from video 00:02-00:05)
      drawRibbon(
        0.65,
        50,
        1.6,
        0.9,
        '#ff3b5c',
        ['rgba(210, 15, 45, 0.4)', 'rgba(50, 3, 10, 0.75)'],
        40,
        22,
        Math.PI * 0.8
      );

      // Layer 4: Foreground high-energy laser red ribbon
      drawRibbon(
        0.72,
        35,
        1.9,
        1.1,
        '#ff6685',
        ['rgba(255, 40, 70, 0.3)', 'rgba(100, 5, 20, 0.6)'],
        28,
        28,
        Math.PI * 1.3
      );

      // 4. Upper-left swooping red arc (wing accent from video 00:00 & 00:08)
      ctx.save();
      ctx.beginPath();
      const ulW = w * 0.55;
      const ulH = h * 0.48;
      ctx.moveTo(-50, -50);
      ctx.lineTo(ulW, -50);
      ctx.bezierCurveTo(
        ulW * 0.7 + Math.sin(time * 0.6) * 20,
        ulH * 0.4 + Math.cos(time * 0.7) * 20,
        ulW * 0.3,
        ulH * 0.9 + Math.sin(time * 0.5) * 15,
        -50,
        ulH
      );
      ctx.closePath();
      const ulGrad = ctx.createLinearGradient(0, 0, ulW * 0.7, ulH * 0.7);
      ulGrad.addColorStop(0, 'rgba(180, 12, 30, 0.65)');
      ulGrad.addColorStop(0.5, 'rgba(90, 5, 15, 0.45)');
      ulGrad.addColorStop(1, 'rgba(25, 2, 5, 0.8)');
      ctx.fillStyle = ulGrad;
      ctx.fill();

      // Glowing edge stroke for the upper-left wing
      ctx.beginPath();
      ctx.moveTo(ulW, -50);
      ctx.bezierCurveTo(
        ulW * 0.7 + Math.sin(time * 0.6) * 20,
        ulH * 0.4 + Math.cos(time * 0.7) * 20,
        ulW * 0.3,
        ulH * 0.9 + Math.sin(time * 0.5) * 15,
        -50,
        ulH
      );
      ctx.shadowColor = '#ff2b4c';
      ctx.shadowBlur = 24;
      ctx.strokeStyle = '#ff3d5e';
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.restore();

      // 5. Draw Light Streaks / Shooting Embers
      streaks.forEach((s) => {
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;

        // Reset if offscreen
        if (s.x < -100 || s.y > h + 100) {
          s.x = Math.random() * w + 100;
          s.y = -50 - Math.random() * 100;
          s.length = Math.random() * 140 + 60;
          s.speed = Math.random() * 4 + 2;
        }

        ctx.save();
        ctx.beginPath();
        const endX = s.x - Math.cos(s.angle) * s.length;
        const endY = s.y - Math.sin(s.angle) * s.length;
        const streakGrad = ctx.createLinearGradient(s.x, s.y, endX, endY);
        streakGrad.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
        streakGrad.addColorStop(0.2, 'rgba(255, 45, 75, 0.7)');
        streakGrad.addColorStop(1, 'rgba(200, 10, 40, 0)');

        ctx.strokeStyle = streakGrad;
        ctx.lineWidth = s.width;
        ctx.shadowColor = '#ff2a4a';
        ctx.shadowBlur = 10;
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        ctx.restore();
      });

      // 6. Draw Glowing Particle System (Embers & Stardust)
      particles.forEach((p) => {
        // Natural curved drift
        p.phase += p.pulseSpeed;
        p.alpha = p.baseAlpha + Math.sin(p.phase) * 0.25;

        // Follow wave currents
        p.x += p.vx + Math.sin(time + p.phase) * 0.4;
        p.y += p.vy + Math.cos(time + p.phase) * 0.3;

        // Loop boundaries
        if (p.y < -20) {
          p.y = h + 20;
          p.x = Math.random() * w;
        }
        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

        // Core fill
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.15, Math.min(1, p.alpha));

        // Intense neon halo for sparks
        if (p.isSpark) {
          ctx.shadowColor = '#ff1a3d';
          ctx.shadowBlur = p.size * 5;
        } else {
          ctx.shadowColor = '#ff3366';
          ctx.shadowBlur = p.size * 3;
        }

        ctx.fill();

        // Extra soft outer halo
        if (p.size > 2) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 30, 60, 0.15)';
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [motionIntensity]);

  return (
    <div 
      id="red-black-motion-background" 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. GPU Accelerated HTML5 Canvas for Fluid Red Ribbons & Glowing Embers */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full block" 
      />

      {/* 2. High-Tech Diagonal Dot Matrix / Stippled Accent (Matches video frame 00:00 & 00:08) */}
      <div 
        className="absolute top-0 left-0 w-80 sm:w-96 h-80 sm:h-96 pointer-events-none opacity-40 mix-blend-screen"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 40, 70, 0.75) 1.5px, transparent 1.5px)',
          backgroundSize: '16px 16px',
          maskImage: 'linear-gradient(135deg, black 30%, transparent 80%)',
          WebkitMaskImage: 'linear-gradient(135deg, black 30%, transparent 80%)',
        }}
      />

      {/* 3. Lower Right High-Tech Dot Accent */}
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none opacity-30 mix-blend-screen"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 30, 60, 0.6) 1.5px, transparent 1.5px)',
          backgroundSize: '18px 18px',
          maskImage: 'linear-gradient(315deg, black 25%, transparent 75%)',
          WebkitMaskImage: 'linear-gradient(315deg, black 25%, transparent 75%)',
        }}
      />

      {/* 4. Twinkling 4-Point Star Sparkle (Faithful match of video bottom-right star at 00:00-00:09) */}
      <div className="absolute bottom-12 right-14 sm:bottom-16 sm:right-24 pointer-events-none animate-pulse duration-1000">
        <svg 
          viewBox="0 0 100 100" 
          className="w-7 h-7 sm:w-9 sm:h-9 text-white/90 drop-shadow-[0_0_12px_rgba(255,50,80,0.9)] animate-spin [animation-duration:18s]"
        >
          {/* 4-point diamond star */}
          <path 
            d="M50 0 C50 35 65 50 100 50 C65 50 50 65 50 100 C50 65 35 50 0 50 C35 50 50 35 50 0 Z" 
            fill="currentColor"
          />
          <circle cx="50" cy="50" r="12" fill="#ff4d6d" opacity="0.8" />
        </svg>
      </div>

      {/* 5. Additional Upper Left Small Twinkling Star */}
      <div className="absolute top-28 left-20 sm:top-36 sm:left-36 pointer-events-none opacity-75">
        <svg 
          viewBox="0 0 100 100" 
          className="w-4 h-4 sm:w-5 sm:h-5 text-red-100 drop-shadow-[0_0_8px_rgba(255,60,90,0.8)] animate-pulse"
        >
          <path 
            d="M50 0 C50 35 65 50 100 50 C65 50 50 65 50 100 C50 65 35 50 0 50 C35 50 50 35 50 0 Z" 
            fill="currentColor"
          />
        </svg>
      </div>

      {/* 6. Subtle Vignette & Contrast Preserving Mask */}
      <div 
        className="absolute inset-0 pointer-events-none bg-radial from-transparent via-black/15 to-black/60" 
        style={{ mixBlendMode: 'multiply' }}
      />
    </div>
  );
};
