const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const FRAMES_DIR = '/tmp/gogo_frames';
const OUTPUT_MP4 = path.join(__dirname, '../public/assets/gogo-log-intro.mp4');
const OUTPUT_POSTER = path.join(__dirname, '../public/assets/gogo-log-poster.png');

if (!fs.existsSync(FRAMES_DIR)) {
  fs.mkdirSync(FRAMES_DIR, { recursive: true });
}

const FPS = 24;
const DURATION = 9; // 9 seconds like user video
const TOTAL_FRAMES = FPS * DURATION; // 216 frames
const WIDTH = 540;
const HEIGHT = 960;

console.log(`Generating ${TOTAL_FRAMES} frames at ${WIDTH}x${HEIGHT} @ ${FPS}fps...`);

// Helper to ease in-out
function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}
function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}

// Particle seeds
const particles = Array.from({ length: 28 }, (_, i) => ({
  x: 40 + (i * 17) % (WIDTH - 80),
  y: 60 + (i * 37) % (HEIGHT - 120),
  r: 4 + (i % 6) * 3,
  speedY: -0.8 - (i % 4) * 0.5,
  speedX: Math.sin(i) * 0.4,
  color: i % 3 === 0 ? '#00e5ff' : i % 3 === 1 ? '#0077b6' : '#90e0ef',
  opacity: 0.2 + (i % 5) * 0.12
}));

for (let i = 0; i < TOTAL_FRAMES; i++) {
  const t = i / FPS; // Current seconds [0 .. 9]
  const progress = i / TOTAL_FRAMES;

  // Background subtle grid and studio floor
  let gridOpacity = 0.25;

  // Particles position
  const particleElements = particles.map((p, idx) => {
    const curY = ((p.y + p.speedY * i * 2.5) % (HEIGHT + 40) + HEIGHT + 40) % (HEIGHT + 40) - 20;
    const curX = p.x + Math.sin(i * 0.05 + idx) * 12;
    const pulse = 0.8 + 0.3 * Math.sin(i * 0.1 + idx);
    return `<circle cx="${curX.toFixed(1)}" cy="${curY.toFixed(1)}" r="${(p.r * pulse).toFixed(1)}" fill="${p.color}" opacity="${(p.opacity * pulse).toFixed(2)}" filter="url(#blur-glow)" />`;
  }).join('\n');

  // Sparkles
  const sparkles = [
    { x: 120, y: 220, phase: 0 },
    { x: 420, y: 280, phase: 2 },
    { x: 390, y: 650, phase: 4 },
    { x: 130, y: 720, phase: 1 },
    { x: 270, y: 180, phase: 3 },
  ].map((s, idx) => {
    const sparkAlpha = Math.max(0, Math.sin(t * 3 + s.phase));
    if (sparkAlpha < 0.1) return '';
    const size = 10 * sparkAlpha;
    return `
      <g transform="translate(${s.x}, ${s.y})" opacity="${sparkAlpha.toFixed(2)}">
        <path d="M0,${-size} Q0,0 ${size},0 Q0,0 0,${size} Q0,0 ${-size},0 Q0,0 0,${-size}" fill="#ffffff" />
        <circle cx="0" cy="0" r="${(size * 0.4).toFixed(1)}" fill="#00f2fe" />
      </g>
    `;
  }).join('\n');

  // Swooshes entry: t from 0.8 to 3.0
  let swooshTopAngle = 0;
  let swooshTopScale = 0;
  let swooshBottomAngle = 0;
  let swooshBottomScale = 0;

  if (t < 3.2) {
    const sProg = clamp((t - 0.5) / 2.2, 0, 1);
    const eased = easeInOutQuad(sProg);
    swooshTopScale = eased;
    swooshTopAngle = (1 - eased) * -120;
    swooshBottomScale = eased;
    swooshBottomAngle = (1 - eased) * 120;
  } else {
    swooshTopScale = 1;
    swooshBottomScale = 1;
  }

  // Emblem main scale & position
  // In early phase it forms at center. In final phase (t > 7.0) it moves slightly up to make room for GOGO LOG text.
  let emblemY = 460;
  let emblemScale = 1;
  if (t > 7.0) {
    const settle = easeInOutQuad(clamp((t - 7.0) / 1.0, 0, 1));
    emblemY = 460 - settle * 70; // shifts from 460 to 390
    emblemScale = 1 - settle * 0.05;
  } else if (t < 2.5) {
    const enter = easeInOutQuad(clamp(t / 2.5, 0, 1));
    emblemScale = 0.2 + enter * 0.8;
  }

  // Document & Pen animation: t from 3.5 to 6.8
  const docProgress = clamp((t - 3.2) / 1.5, 0, 1);
  const docScale = easeInOutQuad(docProgress);
  const docOpacity = clamp((t - 3.2) / 0.8, 0, 1);

  // Pen writing lines: 4 lines
  const penWriteProg = clamp((t - 4.4) / 2.0, 0, 1);
  const line1Prog = clamp((penWriteProg - 0.0) / 0.25, 0, 1);
  const line2Prog = clamp((penWriteProg - 0.25) / 0.25, 0, 1);
  const line3Prog = clamp((penWriteProg - 0.5) / 0.25, 0, 1);
  const line4Prog = clamp((penWriteProg - 0.75) / 0.25, 0, 1);

  // Pen coordinates tracking
  let penX = 300;
  let penY = 430;
  if (penWriteProg < 0.25) {
    penX = 230 + line1Prog * 80;
    penY = 385;
  } else if (penWriteProg < 0.5) {
    penX = 230 + line2Prog * 80;
    penY = 405;
  } else if (penWriteProg < 0.75) {
    penX = 230 + line3Prog * 80;
    penY = 425;
  } else {
    penX = 230 + line4Prog * 80;
    penY = 445;
  }
  const penAngle = -28 + Math.sin(t * 12) * 3;

  // Circuit pulses: t from 6.0 to 7.8
  const circuitOpacity = clamp((t - 5.8) / 0.8, 0, 1) * (t > 7.8 ? Math.max(0.2, 1 - (t - 7.8) * 0.8) : 1);

  // Text & Tagline animation: t from 7.2 to 9.0
  const textProgress = clamp((t - 7.2) / 1.0, 0, 1);
  const textEased = easeInOutQuad(textProgress);
  const textY = 610 - (1 - textEased) * 25;
  const textOpacity = textEased;

  const taglineProgress = clamp((t - 7.8) / 0.8, 0, 1);
  const taglineEased = easeInOutQuad(taglineProgress);
  const taglineY = 665 - (1 - taglineEased) * 15;
  const taglineOpacity = taglineEased;

  // Shimmer sheen across emblem at t=8.2
  const sheenProg = clamp((t - 8.0) / 0.8, 0, 1);
  const sheenX = -200 + sheenProg * 800;

  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${WIDTH} ${HEIGHT}" width="${WIDTH}" height="${HEIGHT}">
    <defs>
      <!-- Gradients -->
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f8fafc" />
        <stop offset="40%" stop-color="#f1f5f9" />
        <stop offset="100%" stop-color="#e2e8f0" />
      </linearGradient>

      <!-- G Outer Arc Gradients -->
      <linearGradient id="cyanArc" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#00f2fe" />
        <stop offset="70%" stop-color="#00c0f8" />
        <stop offset="100%" stop-color="#0096c7" />
      </linearGradient>

      <linearGradient id="blueArc" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0096c7" />
        <stop offset="50%" stop-color="#0077b6" />
        <stop offset="100%" stop-color="#03045e" />
      </linearGradient>

      <linearGradient id="gBarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#0077b6" />
        <stop offset="100%" stop-color="#00b4d8" />
      </linearGradient>

      <!-- Pen Gradient -->
      <linearGradient id="penBody" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#00f2fe" />
        <stop offset="50%" stop-color="#0096c7" />
        <stop offset="100%" stop-color="#023e8a" />
      </linearGradient>

      <linearGradient id="metalNib" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#1e293b" />
        <stop offset="50%" stop-color="#475569" />
        <stop offset="100%" stop-color="#0f172a" />
      </linearGradient>

      <!-- Filters -->
      <filter id="blur-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
      </filter>

      <filter id="drop-shadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="#0284c7" flood-opacity="0.28" />
        <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#0f172a" flood-opacity="0.18" />
      </filter>

      <filter id="card-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#0f172a" flood-opacity="0.12" />
      </filter>
    </defs>

    <!-- Studio Canvas Background -->
    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bgGrad)" />

    <!-- Floor Perspective Tech Grid -->
    <g opacity="${gridOpacity}" stroke="#94a3b8" stroke-width="0.75">
      <line x1="0" y1="780" x2="${WIDTH}" y2="780" />
      <line x1="0" y1="840" x2="${WIDTH}" y2="840" />
      <line x1="0" y1="910" x2="${WIDTH}" y2="910" />
      <!-- Perspective rays -->
      <line x1="270" y1="720" x2="30" y2="${HEIGHT}" />
      <line x1="270" y1="720" x2="150" y2="${HEIGHT}" />
      <line x1="270" y1="720" x2="270" y2="${HEIGHT}" />
      <line x1="270" y1="720" x2="390" y2="${HEIGHT}" />
      <line x1="270" y1="720" x2="510" y2="${HEIGHT}" />
    </g>

    <!-- Floating bokeh orbs -->
    ${particleElements}

    <!-- Sparkles -->
    ${sparkles}

    <!-- Circuit traces around emblem -->
    <g opacity="${circuitOpacity.toFixed(2)}" stroke="#00b4d8" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path d="M 120,${emblemY - 80} H 80 V ${emblemY - 140} H 40" />
      <circle cx="40" cy="${emblemY - 140}" r="4" fill="#00b4d8" />

      <path d="M 420,${emblemY - 80} H 460 V ${emblemY - 140} H 500" />
      <circle cx="500" cy="${emblemY - 140}" r="4" fill="#00b4d8" />

      <path d="M 100,${emblemY + 80} H 60 V ${emblemY + 140} H 30" />
      <circle cx="30" cy="${emblemY + 140}" r="4" fill="#00b4d8" />

      <path d="M 440,${emblemY + 80} H 480 V ${emblemY + 140} H 510" />
      <circle cx="510" cy="${emblemY + 140}" r="4" fill="#00b4d8" />
    </g>

    <!-- Main Emblem Group -->
    <g transform="translate(${WIDTH / 2}, ${emblemY}) scale(${emblemScale})" filter="url(#drop-shadow)">

      <!-- Swoosh Arc 1 (Top Cyan Arc) -->
      <g transform="rotate(${swooshTopAngle}) scale(${swooshTopScale})">
        <path d="M -130,-10 C -130,-90 -60,-150 20,-150 C 95,-150 155,-95 155,-20 C 155,20 135,50 115,50 C 95,50 90,20 90,-20 C 90,-70 50,-110 10,-110 C -35,-110 -85,-70 -85,-10 C -85,25 -70,50 -90,50 C -115,50 -130,25 -130,-10 Z" fill="url(#cyanArc)" />
      </g>

      <!-- Swoosh Arc 2 (Bottom Royal Blue Arc) -->
      <g transform="rotate(${swooshBottomAngle}) scale(${swooshBottomScale})">
        <path d="M -130,-10 C -130,75 -65,145 20,145 C 105,145 160,85 160,0 L 160,-20 L 50,-20 L 50,20 L 115,20 C 110,60 75,100 20,100 C -35,100 -85,60 -85,-10 Z" fill="url(#blueArc)" />
      </g>

      <!-- Center G Infill White Canvas -->
      <ellipse cx="10" cy="-5" rx="90" ry="90" fill="#ffffff" filter="url(#card-shadow)" opacity="${clamp(t - 2.5, 0, 1)}" />

      <!-- Document Sheet Inside G -->
      ${docOpacity > 0 ? `
      <g opacity="${docOpacity.toFixed(2)}" transform="scale(${docScale})">
        <!-- Folded Paper with curled corner -->
        <path d="M -50,-70 L 40,-70 L 70,-40 L 70,60 C 70,68 62,75 55,75 L -50,75 C -58,75 -65,68 -65,60 L -65,-55 C -65,-63 -58,-70 -50,-70 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" filter="url(#card-shadow)" />
        
        <!-- Curled Corner triangle -->
        <path d="M 40,-70 L 40,-40 L 70,-40 Z" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="1.5" />
        <path d="M 40,-40 L 68,-40" stroke="#94a3b8" stroke-width="1" />

        <!-- Ledger Lines -->
        <line x1="-45" y1="-30" x2="${-45 + line1Prog * 85}" y2="-30" stroke="#00b4d8" stroke-width="4.5" stroke-linecap="round" />
        <line x1="-45" y1="-10" x2="${-45 + line2Prog * 95}" y2="-10" stroke="#334155" stroke-width="3" stroke-linecap="round" />
        <line x1="-45" y1="10" x2="${-45 + line3Prog * 90}" y2="10" stroke="#64748b" stroke-width="3" stroke-linecap="round" />
        <line x1="-45" y1="30" x2="${-45 + line4Prog * 75}" y2="30" stroke="#64748b" stroke-width="3" stroke-linecap="round" />

        <!-- Stamp / Status dot -->
        ${line4Prog > 0.8 ? `
          <circle cx="50" cy="50" r="12" fill="#10b981" opacity="0.9" />
          <path d="M 45,50 L 49,54 L 56,46" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" />
        ` : ''}
      </g>
      ` : ''}

      <!-- Stylus / Fountain Pen Nib -->
      ${t >= 3.8 && t <= 7.0 ? `
      <g transform="translate(${penX - WIDTH / 2}, ${penY - emblemY}) rotate(${penAngle})">
        <!-- Pen Body -->
        <rect x="-8" y="-90" width="16" height="70" rx="8" fill="url(#penBody)" filter="url(#card-shadow)" />
        <!-- Metal Ring -->
        <rect x="-9" y="-22" width="18" height="6" rx="2" fill="#cbd5e1" />
        <!-- Nib Base -->
        <path d="M -8,-16 L 8,-16 L 5,-4 L -5,-4 Z" fill="url(#metalNib)" />
        <!-- Nib Point -->
        <path d="M -5,-4 L 0,10 L 5,-4 Z" fill="url(#metalNib)" />
        <!-- Nib Split -->
        <line x1="0" y1="-4" x2="0" y2="8" stroke="#ffffff" stroke-width="0.75" />
        <!-- Nib Breather Hole -->
        <circle cx="0" cy="-3" r="1.2" fill="#ffffff" />
        <!-- Ink Sparkle -->
        <circle cx="0" cy="11" r="3" fill="#00f2fe" filter="url(#blur-glow)" />
      </g>
      ` : ''}

      <!-- Light Sheen sweep across logo -->
      ${t >= 7.8 ? `
      <g opacity="${(1 - Math.abs(sheenProg - 0.5) * 2).toFixed(2)}">
        <rect x="${sheenX - 30}" y="-160" width="60" height="320" fill="url(#cyanArc)" opacity="0.3" transform="rotate(25)" filter="url(#blur-glow)" />
      </g>
      ` : ''}
    </g>

    <!-- Typography: GOGO LOG -->
    ${textOpacity > 0 ? `
    <g opacity="${textOpacity.toFixed(2)}" transform="translate(${WIDTH / 2}, ${textY})" text-anchor="middle">
      <text font-family="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif" font-size="52" font-weight="900" letter-spacing="1">
        <tspan fill="#00b4d8">GOGO</tspan>
        <tspan fill="#0f172a" dx="14">LOG</tspan>
      </text>
    </g>
    ` : ''}

    <!-- Tagline: TRACK • RECORD • GROW -->
    ${taglineOpacity > 0 ? `
    <g opacity="${taglineOpacity.toFixed(2)}" transform="translate(${WIDTH / 2}, ${taglineY})" text-anchor="middle">
      <text font-family="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif" font-size="14" font-weight="800" fill="#475569" letter-spacing="4">
        TRACK  <tspan fill="#00b4d8">•</tspan>  RECORD  <tspan fill="#00b4d8">•</tspan>  GROW
      </text>
    </g>
    ` : ''}

  </svg>
  `;

  const frameFileName = path.join(FRAMES_DIR, `frame_${String(i).padStart(4, '0')}.svg`);
  fs.writeFileSync(frameFileName, svg.trim());
}

console.log('All SVG frames written successfully. Compiling MP4 with ffmpeg...');

// Run ffmpeg to assemble the frames into H.264 MP4 with faststart for instant web streaming
const ffmpegCmd = `ffmpeg -y -framerate ${FPS} -i "${FRAMES_DIR}/frame_%04d.svg" -c:v libx264 -profile:v high -level 4.0 -pix_fmt yuv420p -movflags +faststart "${OUTPUT_MP4}"`;
execSync(ffmpegCmd, { stdio: 'inherit' });

console.log(`Video compiled successfully to: ${OUTPUT_MP4}`);

// Also export frame 210 as high-resolution poster image for video element
const posterCmd = `ffmpeg -y -i "${FRAMES_DIR}/frame_0210.svg" "${OUTPUT_POSTER}"`;
execSync(posterCmd, { stdio: 'inherit' });
console.log(`Poster image created at: ${OUTPUT_POSTER}`);

// Cleanup temporary frames
execSync(`rm -rf "${FRAMES_DIR}"`);
console.log('Temporary frames cleaned up.');
