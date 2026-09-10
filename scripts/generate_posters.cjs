// Node script to generate SVG and PNG assets for both GOGO LOG posters
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const publicAssetsDir = path.join(__dirname, '../public/assets');
if (!fs.existsSync(publicAssetsDir)) {
  fs.mkdirSync(publicAssetsDir, { recursive: true });
}

// POSTER 1: Landscape Format (1920 x 1080) - "BOOST YOUR BUSINESS WITH GOGO LOG! TRACK. RECORD. GROW."
const poster1Svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="1920" height="1080">
  <defs>
    <linearGradient id="bgGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f8f9fe"/>
      <stop offset="50%" stop-color="#eff2fc"/>
      <stop offset="100%" stop-color="#e8ecfb"/>
    </linearGradient>

    <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#432bb3"/>
      <stop offset="100%" stop-color="#6941c6"/>
    </linearGradient>

    <linearGradient id="gLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#0ea5e9"/>
    </linearGradient>

    <linearGradient id="badgeGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#facc15"/>
      <stop offset="100%" stop-color="#eab308"/>
    </linearGradient>

    <filter id="shadowLg" x="-10%" y="-10%" width="125%" height="125%">
      <feDropShadow dx="0" dy="16" stdDeviation="24" flood-color="#1e1b4b" flood-opacity="0.14"/>
    </filter>
    <filter id="shadowCard" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#432bb3" flood-opacity="0.08"/>
    </filter>
  </defs>

  <!-- Background Base -->
  <rect width="1920" height="1080" fill="url(#bgGrad1)"/>
  
  <!-- Subtle decorative ambient blobs -->
  <circle cx="1700" cy="180" r="360" fill="#6366f1" fill-opacity="0.05" filter="blur(60px)"/>
  <circle cx="150" cy="900" r="320" fill="#3b82f6" fill-opacity="0.05" filter="blur(60px)"/>
  <circle cx="1000" cy="540" r="450" fill="#a855f7" fill-opacity="0.03" filter="blur(80px)"/>

  <!-- Top Left: GOGO LOG Logo & Brand -->
  <g transform="translate(60, 48)">
    <rect x="0" y="0" width="80" height="80" rx="22" fill="#ffffff" filter="url(#shadowCard)"/>
    <rect x="0" y="0" width="80" height="80" rx="22" fill="none" stroke="#e0e7ff" stroke-width="2"/>
    <!-- Logo Icon -->
    <circle cx="40" cy="40" r="24" fill="#0284c7"/>
    <circle cx="40" cy="40" r="15" fill="#ffffff"/>
    <path d="M 40 25 A 15 15 0 0 1 55 40 L 40 40 Z" fill="#0284c7"/>
    <circle cx="40" cy="40" r="7" fill="#0284c7"/>
    <!-- Brand Wordmark -->
    <text x="104" y="55" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="44" font-weight="900" fill="#0f172a" letter-spacing="-0.5">GOGO LOG</text>
  </g>

  <!-- Central Hero Header Text -->
  <g transform="translate(960, 130)" text-anchor="middle">
    <text y="0" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="52" font-weight="900" fill="#432bb3" letter-spacing="-0.5">
      BOOST YOUR BUSINESS WITH <tspan fill="#6941c6">GOGO LOG!</tspan>
    </text>
    <text y="58" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="42" font-weight="900" fill="#1e1b4b" letter-spacing="3">
      TRACK. RECORD. GROW.
    </text>
  </g>

  <!-- TABLET MOCKUP CONTAINER (Centered Left & Mid) -->
  <g transform="translate(340, 245)">
    <!-- Tablet Outer Shell (Bezel) -->
    <rect x="0" y="0" width="940" height="580" rx="36" fill="#18181b" filter="url(#shadowLg)"/>
    <rect x="4" y="4" width="932" height="572" rx="32" fill="#27272a"/>
    <!-- Screen Viewport -->
    <rect x="18" y="18" width="904" height="544" rx="20" fill="#f8fafc"/>

    <!-- Inside Tablet App Header Bar -->
    <rect x="18" y="18" width="904" height="54" rx="20" fill="#5842c2"/>
    <g transform="translate(42, 48)">
      <circle cx="12" cy="5" r="10" fill="#0284c7"/>
      <text x="32" y="10" font-family="system-ui, sans-serif" font-size="16" font-weight="800" fill="#ffffff">GOGO LOG</text>
      <text x="32" y="24" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#c7d2fe">GOGO SHOP</text>
    </g>

    <!-- Cloud Sync & Navigation Tabs -->
    <g transform="translate(740, 48)">
      <rect x="0" y="-4" width="105" height="24" rx="12" fill="#432bb3"/>
      <circle cx="14" cy="8" r="4" fill="#34d399"/>
      <text x="24" y="12" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#e0e7ff">Cloud Sync</text>
    </g>

    <g transform="translate(40, 96)">
      <!-- Tab Pills -->
      <rect x="0" y="0" width="94" height="28" rx="8" fill="#5842c2"/>
      <text x="18" y="18" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#ffffff">Dashboard</text>

      <rect x="104" y="0" width="92" height="28" rx="8" fill="#ede9fe"/>
      <text x="116" y="18" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#5842c2">Broadcasts</text>

      <rect x="206" y="0" width="68" height="28" rx="8" fill="#ede9fe"/>
      <text x="220" y="18" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#5842c2">Leave</text>

      <rect x="284" y="0" width="92" height="28" rx="8" fill="#ede9fe"/>
      <text x="296" y="18" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#5842c2">Employees</text>

      <rect x="386" y="0" width="96" height="28" rx="8" fill="#ede9fe"/>
      <text x="398" y="18" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#5842c2">Attendance</text>
    </g>

    <!-- TWO COLUMN CONTENT INSIDE TABLET SCREEN -->

    <!-- CARD 1: LIVE ATTENDANCE TABLE (Left Inner Card) -->
    <g transform="translate(40, 136)">
      <rect x="0" y="0" width="450" height="395" rx="14" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" filter="url(#shadowCard)"/>
      
      <!-- Card Header -->
      <path d="M 0 14 Q 0 0 14 0 L 436 0 Q 450 0 450 14 L 450 44 L 0 44 Z" fill="#ede9fe"/>
      <text x="20" y="28" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#432bb3" letter-spacing="0.5">LIVE ATTENDANCE</text>
      
      <!-- Table Header -->
      <g transform="translate(20, 68)" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#64748b">
        <text x="0" y="0">EMPLOYEE</text>
        <text x="140" y="0">IN</text>
        <text x="230" y="0">OUT</text>
        <text x="310" y="0">STATUS</text>
      </g>
      <line x1="20" y1="78" x2="430" y2="78" stroke="#f1f5f9" stroke-width="1.5"/>

      <!-- Row 1: Gogo -->
      <g transform="translate(20, 114)" font-family="system-ui, sans-serif" font-size="13">
        <text x="0" y="0" font-weight="700" fill="#1e293b">Gogo</text>
        <text x="140" y="0" font-weight="600" fill="#475569">9:00 AM</text>
        <text x="230" y="0" font-weight="600" fill="#94a3b8">-- : --</text>
        <rect x="306" y="-16" width="76" height="24" rx="12" fill="#dcfce7"/>
        <text x="318" y="0" font-size="11" font-weight="800" fill="#15803d">WORKING</text>
      </g>
      <line x1="20" y1="130" x2="430" y2="130" stroke="#f8fafc" stroke-width="1"/>

      <!-- Row 2: Sarfu -->
      <g transform="translate(20, 164)" font-family="system-ui, sans-serif" font-size="13">
        <text x="0" y="0" font-weight="700" fill="#1e293b">Sarfu</text>
        <text x="140" y="0" font-weight="600" fill="#475569">9:00 AM</text>
        <text x="230" y="0" font-weight="600" fill="#94a3b8">-- : --</text>
        <rect x="306" y="-16" width="76" height="24" rx="12" fill="#dcfce7"/>
        <text x="318" y="0" font-size="11" font-weight="800" fill="#15803d">WORKING</text>
      </g>
      <line x1="20" y1="180" x2="430" y2="180" stroke="#f8fafc" stroke-width="1"/>

      <!-- Row 3: Singha -->
      <g transform="translate(20, 214)" font-family="system-ui, sans-serif" font-size="13">
        <text x="0" y="0" font-weight="700" fill="#1e293b">Singha</text>
        <text x="140" y="0" font-weight="600" fill="#475569">9:00 AM</text>
        <text x="230" y="0" font-weight="600" fill="#94a3b8">-- : --</text>
        <rect x="306" y="-16" width="76" height="24" rx="12" fill="#dcfce7"/>
        <text x="318" y="0" font-size="11" font-weight="800" fill="#15803d">WORKING</text>
      </g>
      <line x1="20" y1="230" x2="430" y2="230" stroke="#f8fafc" stroke-width="1"/>

      <!-- Row 4: Dutta -->
      <g transform="translate(20, 264)" font-family="system-ui, sans-serif" font-size="13">
        <text x="0" y="0" font-weight="700" fill="#1e293b">Dutta</text>
        <text x="140" y="0" font-weight="600" fill="#475569">9:00 AM</text>
        <text x="230" y="0" font-weight="600" fill="#94a3b8">-- : --</text>
        <rect x="306" y="-16" width="76" height="24" rx="12" fill="#dcfce7"/>
        <text x="318" y="0" font-size="11" font-weight="800" fill="#15803d">WORKING</text>
      </g>
      <line x1="20" y1="280" x2="430" y2="280" stroke="#f8fafc" stroke-width="1"/>

      <!-- Row 5: Jast Dutta (Absent) -->
      <g transform="translate(20, 314)" font-family="system-ui, sans-serif" font-size="13">
        <text x="0" y="0" font-weight="700" fill="#1e293b">Jast Dutta</text>
        <text x="140" y="0" font-weight="600" fill="#94a3b8">-- : --</text>
        <text x="230" y="0" font-weight="600" fill="#94a3b8">-- : --</text>
        <rect x="306" y="-16" width="76" height="24" rx="12" fill="#fee2e2"/>
        <text x="323" y="0" font-size="11" font-weight="800" fill="#dc2626">ABSENT</text>
      </g>

      <!-- Bottom Quick Action Summary -->
      <g transform="translate(20, 355)">
        <rect x="0" y="0" width="410" height="28" rx="8" fill="#f8fafc" stroke="#e2e8f0"/>
        <text x="12" y="18" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#64748b">Attendance synchronized via 1-tap mobile register</text>
      </g>
    </g>

    <!-- CARD 2: INSTANT BROADCASTS (Right Inner Card) -->
    <g transform="translate(506, 136)">
      <rect x="0" y="0" width="395" height="225" rx="14" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" filter="url(#shadowCard)"/>
      
      <!-- Card Header -->
      <path d="M 0 14 Q 0 0 14 0 L 381 0 Q 395 0 395 14 L 395 44 L 0 44 Z" fill="#ede9fe"/>
      <text x="20" y="28" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#432bb3" letter-spacing="0.5">INSTANT BROADCASTS</text>
      <rect x="305" y="10" width="72" height="22" rx="11" fill="#c7d2fe"/>
      <text x="318" y="25" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#3730a3">1 Notice</text>

      <!-- Broadcast 1: Friday Holiday -->
      <g transform="translate(20, 64)">
        <rect x="0" y="0" width="84" height="20" rx="6" fill="#e0e7ff"/>
        <text x="8" y="14" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#432bb3">@ Shop Notice</text>

        <rect x="92" y="0" width="94" height="20" rx="6" fill="#dcfce7"/>
        <text x="100" y="14" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#15803d">✓ Acknowledged</text>

        <text x="305" y="14" font-family="system-ui, sans-serif" font-size="11" font-weight="500" fill="#94a3b8">11:41 am</text>

        <text x="2" y="44" font-family="system-ui, sans-serif" font-size="15" font-weight="900" fill="#0f172a">FRIDAY HOLIDAY</text>
        <text x="2" y="64" font-family="system-ui, sans-serif" font-size="12" font-weight="600" fill="#64748b">Closed shop</text>
      </g>

      <!-- Broadcast 2: Assigned Task -->
      <g transform="translate(20, 150)">
        <rect x="0" y="0" width="355" height="56" rx="10" fill="#f8fafc" stroke="#e2e8f0"/>
        <text x="14" y="24" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#432bb3">Assigned Task From OWNER • DUE 06:00</text>
        <text x="14" y="44" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#15803d">Enjoy with family</text>
      </g>
    </g>

    <!-- CARD 3: METRICS SUMMARY TILE (Bottom Right Inner Card) -->
    <g transform="translate(506, 380)">
      <rect x="0" y="0" width="395" height="151" rx="14" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" filter="url(#shadowCard)"/>
      
      <text x="20" y="32" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#1e1b4b" letter-spacing="0.5">TOTAL EMPLOYEES: 4, PRESENT TODAY: 3</text>
      
      <!-- Split Stats -->
      <g transform="translate(20, 52)">
        <rect x="0" y="0" width="168" height="78" rx="12" fill="#f8fafc" stroke="#e2e8f0"/>
        <text x="16" y="44" font-family="system-ui, sans-serif" font-size="36" font-weight="900" fill="#432bb3">4</text>
        <text x="16" y="64" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#64748b">Total Employees</text>
      </g>

      <g transform="translate(206, 52)">
        <rect x="0" y="0" width="168" height="78" rx="12" fill="#f8fafc" stroke="#e2e8f0"/>
        <text x="16" y="44" font-family="system-ui, sans-serif" font-size="36" font-weight="900" fill="#dc2626">3</text>
        <text x="16" y="64" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#64748b">Absent / On Leave</text>
      </g>
    </g>
  </g>

  <!-- RIGHT COLUMN: PRICING SEAL & WHATSAPP EXCLUSIVE -->
  <g transform="translate(1330, 240)">
    
    <!-- Header: UNLOCK ALL PREMIUM FEATURES -->
    <g text-anchor="middle" transform="translate(240, 40)">
      <text y="0" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="900" fill="#1e1b4b" letter-spacing="0.5">
        UNLOCK ALL
      </text>
      <text y="34" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="900" fill="#1e1b4b" letter-spacing="0.5">
        PREMIUM FEATURES!
      </text>
    </g>

    <!-- Circular Badge Stamp (JUST ₹99/- ONE-TIME ANNUAL SUBSCRIPTION) -->
    <g transform="translate(240, 250)">
      <!-- Outer Ring -->
      <circle cx="0" cy="0" r="175" fill="#ffffff" stroke="#1e293b" stroke-width="12" filter="url(#shadowLg)"/>
      <circle cx="0" cy="0" r="158" fill="none" stroke="#3b82f6" stroke-width="4"/>
      
      <text y="-50" text-anchor="middle" font-family="system-ui, sans-serif" font-size="38" font-weight="900" fill="#0f172a" letter-spacing="1">
        JUST
      </text>
      
      <text y="32" text-anchor="middle" font-family="system-ui, sans-serif" font-size="86" font-weight="900" fill="#1e1b4b" letter-spacing="-2">
        ₹99/-
      </text>
      
      <text y="80" text-anchor="middle" font-family="system-ui, sans-serif" font-size="17" font-weight="900" fill="#0f172a" letter-spacing="1.5">
        ONE-TIME ANNUAL
      </text>
      <text y="104" text-anchor="middle" font-family="system-ui, sans-serif" font-size="17" font-weight="900" fill="#0f172a" letter-spacing="1.5">
        SUBSCRIPTION
      </text>
    </g>

    <!-- GET GOGO LOG NOW Button -->
    <g transform="translate(60, 470)">
      <rect x="0" y="0" width="360" height="64" rx="32" fill="#3b2d87" filter="url(#shadowCard)"/>
      <text x="180" y="41" text-anchor="middle" font-family="system-ui, sans-serif" font-size="22" font-weight="900" fill="#ffffff" letter-spacing="1">
        GET GOGO LOG NOW!
      </text>
    </g>

    <!-- WhatsApp Contact Block -->
    <g transform="translate(60, 560)">
      <!-- WhatsApp Icon -->
      <circle cx="36" cy="36" r="34" fill="#22c55e"/>
      <path d="M 23 48 L 26 38 A 14 14 0 1 1 48 38 A 14 14 0 0 1 36 48 A 14 14 0 0 1 29 46 Z" fill="#ffffff"/>
      <path d="M 31 29 C 30 28 29 28 28 29 C 27 30 26 32 26 33 C 26 35 28 38 31 41 C 34 44 37 45 39 45 C 41 45 42 44 43 43 C 44 41 44 40 43 39 C 42 38 40 37 39 37 C 38 37 37 37 37 38 C 36 39 36 39 35 39 C 34 39 32 37 30 35 C 29 33 29 32 30 32 C 30 31 31 31 31 30 Z" fill="#22c55e"/>

      <!-- Text -->
      <text x="86" y="26" font-family="system-ui, sans-serif" font-size="21" font-weight="800" fill="#0f172a">
        Available exclusively
      </text>
      <text x="86" y="48" font-family="system-ui, sans-serif" font-size="21" font-weight="800" fill="#0f172a">
        through WhatsApp
      </text>
      <text x="86" y="74" font-family="system-ui, sans-serif" font-size="21" font-weight="800" fill="#15803d">
        Number: 9068254755
      </text>
    </g>
  </g>

  <!-- 4 BOTTOM PILLAR FEATURE CARDS -->
  <g transform="translate(80, 860)">
    
    <!-- CARD 1: Attendance -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="395" height="170" rx="22" fill="#ffffff" stroke="#e0e7ff" stroke-width="2" filter="url(#shadowCard)"/>
      <g transform="translate(197, -32)">
        <circle cx="0" cy="0" r="36" fill="#f5f3ff" stroke="#e0e7ff" stroke-width="2"/>
        <!-- Clock Icon -->
        <circle cx="0" cy="0" r="18" fill="none" stroke="#6941c6" stroke-width="3.5"/>
        <polyline points="0,-10 0,0 8,4" fill="none" stroke="#6941c6" stroke-width="3.5" stroke-linecap="round"/>
      </g>
      <text x="197" y="90" text-anchor="middle" font-family="system-ui, sans-serif" font-size="20" font-weight="900" fill="#0f172a">
        EASY ATTENDANCE &amp;
      </text>
      <text x="197" y="120" text-anchor="middle" font-family="system-ui, sans-serif" font-size="20" font-weight="900" fill="#0f172a">
        SHIFT MANAGEMENT
      </text>
    </g>

    <!-- CARD 2: Communication -->
    <g transform="translate(450, 0)">
      <rect x="0" y="0" width="395" height="170" rx="22" fill="#ffffff" stroke="#e0e7ff" stroke-width="2" filter="url(#shadowCard)"/>
      <g transform="translate(197, -32)">
        <circle cx="0" cy="0" r="36" fill="#f5f3ff" stroke="#e0e7ff" stroke-width="2"/>
        <!-- Megaphone Icon -->
        <path d="M -12 -6 L 0 -12 L 12 -4 L 12 8 L 0 14 L -12 8 Z" fill="#6941c6"/>
        <path d="M 0 14 L 4 22" stroke="#6941c6" stroke-width="3.5" stroke-linecap="round"/>
      </g>
      <text x="197" y="80" text-anchor="middle" font-family="system-ui, sans-serif" font-size="20" font-weight="900" fill="#0f172a">
        DIRECT
      </text>
      <text x="197" y="108" text-anchor="middle" font-family="system-ui, sans-serif" font-size="20" font-weight="900" fill="#0f172a">
        OWNER-TO-STAFF
      </text>
      <text x="197" y="136" text-anchor="middle" font-family="system-ui, sans-serif" font-size="20" font-weight="900" fill="#0f172a">
        COMMUNICATION
      </text>
    </g>

    <!-- CARD 3: Payroll -->
    <g transform="translate(900, 0)">
      <rect x="0" y="0" width="395" height="170" rx="22" fill="#ffffff" stroke="#e0e7ff" stroke-width="2" filter="url(#shadowCard)"/>
      <g transform="translate(197, -32)">
        <circle cx="0" cy="0" r="36" fill="#f5f3ff" stroke="#e0e7ff" stroke-width="2"/>
        <!-- Rupee Coin Icon -->
        <circle cx="0" cy="0" r="20" fill="none" stroke="#6941c6" stroke-width="3.5"/>
        <text x="0" y="8" text-anchor="middle" font-family="system-ui, sans-serif" font-size="22" font-weight="900" fill="#6941c6">₹</text>
      </g>
      <text x="197" y="90" text-anchor="middle" font-family="system-ui, sans-serif" font-size="20" font-weight="900" fill="#0f172a">
        SIMPLIFIED
      </text>
      <text x="197" y="120" text-anchor="middle" font-family="system-ui, sans-serif" font-size="20" font-weight="900" fill="#0f172a">
        PAYROLL TRACKING
      </text>
    </g>

    <!-- CARD 4: Analytics -->
    <g transform="translate(1350, 0)">
      <rect x="0" y="0" width="395" height="170" rx="22" fill="#ffffff" stroke="#e0e7ff" stroke-width="2" filter="url(#shadowCard)"/>
      <g transform="translate(197, -32)">
        <circle cx="0" cy="0" r="36" fill="#f5f3ff" stroke="#e0e7ff" stroke-width="2"/>
        <!-- Analytics Chart Icon -->
        <rect x="-14" y="0" width="6" height="14" rx="2" fill="#6941c6"/>
        <rect x="-4" y="-8" width="6" height="22" rx="2" fill="#6941c6"/>
        <rect x="6" y="-14" width="6" height="28" rx="2" fill="#6941c6"/>
      </g>
      <text x="197" y="90" text-anchor="middle" font-family="system-ui, sans-serif" font-size="20" font-weight="900" fill="#0f172a">
        DETAILED BUSINESS
      </text>
      <text x="197" y="120" text-anchor="middle" font-family="system-ui, sans-serif" font-size="20" font-weight="900" fill="#0f172a">
        ANALYTICS
      </text>
    </g>

  </g>

</svg>
`;

// POSTER 2: Portrait Format (1080 x 1920) - "RUN YOUR SHOP. MANAGE YOUR TEAM. SIMPLIFY EVERYTHING."
const poster2Svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1920" width="1080" height="1920">
  <defs>
    <linearGradient id="bgGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f0fdf4"/>
      <stop offset="25%" stop-color="#f8fafc"/>
      <stop offset="70%" stop-color="#f1f5f9"/>
      <stop offset="100%" stop-color="#e2e8f0"/>
    </linearGradient>

    <linearGradient id="phoneFrameGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#27272a"/>
      <stop offset="100%" stop-color="#09090b"/>
    </linearGradient>

    <linearGradient id="offerBadgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#bef264"/>
      <stop offset="100%" stop-color="#84cc16"/>
    </linearGradient>

    <filter id="shadowP2Lg" x="-15%" y="-15%" width="130%" height="130%">
      <feDropShadow dx="0" dy="24" stdDeviation="30" flood-color="#0f172a" flood-opacity="0.18"/>
    </filter>
    <filter id="shadowFeature" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#1e293b" flood-opacity="0.06"/>
    </filter>
  </defs>

  <!-- Background Base -->
  <rect width="1080" height="1920" fill="url(#bgGrad2)"/>
  
  <!-- Subtle decorative ambient circles -->
  <circle cx="540" cy="180" r="400" fill="#0284c7" fill-opacity="0.04" filter="blur(80px)"/>
  <circle cx="150" cy="700" r="300" fill="#10b981" fill-opacity="0.04" filter="blur(70px)"/>
  <circle cx="900" cy="1300" r="350" fill="#6366f1" fill-opacity="0.04" filter="blur(80px)"/>

  <!-- Top Center Logo -->
  <g transform="translate(540, 70)" text-anchor="middle">
    <!-- Logo Badge -->
    <g transform="translate(-140, -32)">
      <circle cx="32" cy="32" r="28" fill="#0284c7"/>
      <circle cx="32" cy="32" r="18" fill="#ffffff"/>
      <path d="M 32 14 A 18 18 0 0 1 50 32 L 32 32 Z" fill="#0284c7"/>
      <circle cx="32" cy="32" r="8" fill="#0284c7"/>
    </g>
    <text x="35" y="10" font-family="system-ui, -apple-system, sans-serif" font-size="46" font-weight="900" fill="#0f172a" letter-spacing="-0.5">GOGO LOG</text>
    
    <!-- Top Right Circular G icon -->
    <g transform="translate(420, -32)">
      <circle cx="32" cy="32" r="30" fill="#0284c7"/>
      <circle cx="32" cy="32" r="18" fill="#ffffff"/>
      <path d="M 32 14 A 18 18 0 0 1 50 32 L 32 32 Z" fill="#0284c7"/>
      <circle cx="32" cy="32" r="8" fill="#0284c7"/>
    </g>
  </g>

  <!-- Big Hero Punchy Headline -->
  <g transform="translate(540, 190)" text-anchor="middle">
    <text y="0" font-family="system-ui, -apple-system, sans-serif" font-size="52" font-weight="900" fill="#0f172a" letter-spacing="-1">
      RUN YOUR SHOP. MANAGE YOUR
    </text>
    <text y="58" font-family="system-ui, -apple-system, sans-serif" font-size="52" font-weight="900" fill="#0f172a" letter-spacing="-1">
      TEAM. SIMPLIFY EVERYTHING.
    </text>
    
    <!-- Subtitle -->
    <text y="112" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="800" fill="#334155">
      <tspan fill="#0284c7">GOGO LOG</tspan> — Smart Employee Management for Shop Owners
    </text>
  </g>

  <!-- CENTER SMARTPHONE MOCKUP (X: 380, Y: 360, W: 320, H: 650) -->
  <g transform="translate(380, 360)">
    <!-- Outer Phone Chassis -->
    <rect x="0" y="0" width="320" height="650" rx="44" fill="url(#phoneFrameGrad)" filter="url(#shadowP2Lg)"/>
    <rect x="3" y="3" width="314" height="644" rx="41" fill="#18181b"/>
    <!-- Glass Screen Frame -->
    <rect x="10" y="10" width="300" height="630" rx="36" fill="#f8fafc"/>

    <!-- Dynamic Island Notch -->
    <rect x="110" y="18" width="80" height="20" rx="10" fill="#000000"/>
    <circle cx="176" cy="28" r="4" fill="#1e293b"/>

    <!-- Inside Phone Screen Header -->
    <rect x="10" y="44" width="300" height="48" fill="#432bb3"/>
    <g transform="translate(24, 74)">
      <circle cx="8" cy="0" r="7" fill="#0284c7"/>
      <text x="20" y="4" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#ffffff">GOGO LOG</text>
      <text x="210" y="3" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#cbd5e1">09:41 AM</text>
    </g>

    <!-- App Body: Today at a glance -->
    <g transform="translate(24, 110)">
      <text x="0" y="0" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#1e293b">Today at a glance</text>
      <text x="0" y="14" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#64748b">Tuesday 2 September 2026</text>
      
      <!-- 6 Mini Metric Cards -->
      <!-- 4 Total Employees -->
      <rect x="0" y="24" width="84" height="52" rx="8" fill="#f0fdf4" stroke="#bbf7d0"/>
      <text x="10" y="48" font-family="system-ui, sans-serif" font-size="18" font-weight="900" fill="#16a34a">4</text>
      <text x="10" y="66" font-family="system-ui, sans-serif" font-size="8" font-weight="700" fill="#15803d">Total Employees</text>

      <!-- 3 Present Daily -->
      <rect x="92" y="24" width="84" height="52" rx="8" fill="#ecfeff" stroke="#a5f3fc"/>
      <text x="102" y="48" font-family="system-ui, sans-serif" font-size="18" font-weight="900" fill="#0284c7">3</text>
      <text x="102" y="66" font-family="system-ui, sans-serif" font-size="8" font-weight="700" fill="#0369a1">Present Daily</text>

      <!-- 1 Absent Today -->
      <rect x="184" y="24" width="88" height="52" rx="8" fill="#fef2f2" stroke="#fecaca"/>
      <text x="194" y="48" font-family="system-ui, sans-serif" font-size="18" font-weight="900" fill="#dc2626">1</text>
      <text x="194" y="66" font-family="system-ui, sans-serif" font-size="8" font-weight="700" fill="#b91c1c">Absent Today</text>

      <!-- Row 2 -->
      <rect x="0" y="84" width="84" height="44" rx="8" fill="#ffffff" stroke="#e2e8f0"/>
      <text x="10" y="104" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#475569">0</text>
      <text x="10" y="118" font-family="system-ui, sans-serif" font-size="8" font-weight="600" fill="#64748b">Late Today</text>

      <rect x="92" y="84" width="84" height="44" rx="8" fill="#ffffff" stroke="#e2e8f0"/>
      <text x="102" y="104" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#475569">3</text>
      <text x="102" y="118" font-family="system-ui, sans-serif" font-size="8" font-weight="600" fill="#64748b">Currently Working</text>

      <rect x="184" y="84" width="88" height="44" rx="8" fill="#ffffff" stroke="#e2e8f0"/>
      <text x="194" y="104" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#475569">0.0</text>
      <text x="194" y="118" font-family="system-ui, sans-serif" font-size="8" font-weight="600" fill="#64748b">Unassigned</text>
    </g>

    <!-- Blue Announcement Bar -->
    <g transform="translate(24, 252)">
      <rect x="0" y="0" width="272" height="28" rx="7" fill="#432bb3"/>
      <text x="12" y="18" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#ffffff">Broadcast Message: 2 Orders Done</text>
    </g>

    <!-- LIVE ATTENDANCE REGISTER TABLE (inside phone) -->
    <g transform="translate(24, 290)">
      <rect x="0" y="0" width="272" height="150" rx="10" fill="#ffffff" stroke="#e2e8f0"/>
      <text x="10" y="18" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#0f172a">LIVE ATTENDANCE REGISTER</text>
      
      <line x1="10" y1="26" x2="262" y2="26" stroke="#f1f5f9"/>
      <g transform="translate(10, 42)" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#64748b">
        <text x="0" y="0">EMPLOYEE</text>
        <text x="80" y="0">IN</text>
        <text x="140" y="0">OUT</text>
        <text x="190" y="0">STATUS</text>
      </g>

      <!-- Row 1: Gogo -->
      <g transform="translate(10, 68)" font-family="system-ui, sans-serif" font-size="9">
        <text x="0" y="0" font-weight="700" fill="#0f172a">Gogo</text>
        <text x="80" y="0" fill="#475569">10:00 AM</text>
        <text x="140" y="0" fill="#94a3b8">-- : --</text>
        <rect x="186" y="-11" width="48" height="15" rx="4" fill="#dcfce7"/>
        <text x="192" y="0" font-size="8" font-weight="800" fill="#15803d">Working</text>
      </g>

      <!-- Row 2: Sarfu -->
      <g transform="translate(10, 96)" font-family="system-ui, sans-serif" font-size="9">
        <text x="0" y="0" font-weight="700" fill="#0f172a">Sarfu</text>
        <text x="80" y="0" fill="#475569">10:00 AM</text>
        <text x="140" y="0" fill="#94a3b8">-- : --</text>
        <rect x="186" y="-11" width="48" height="15" rx="4" fill="#dcfce7"/>
        <text x="192" y="0" font-size="8" font-weight="800" fill="#15803d">Working</text>
      </g>

      <!-- Row 3: Singha -->
      <g transform="translate(10, 124)" font-family="system-ui, sans-serif" font-size="9">
        <text x="0" y="0" font-weight="700" fill="#0f172a">Singha</text>
        <text x="80" y="0" fill="#475569">10:00 AM</text>
        <text x="140" y="0" fill="#94a3b8">-- : --</text>
        <rect x="186" y="-11" width="48" height="15" rx="4" fill="#dcfce7"/>
        <text x="192" y="0" font-size="8" font-weight="800" fill="#15803d">Working</text>
      </g>
    </g>

    <!-- Scan & Pay QR Code Card at Bottom of Phone -->
    <g transform="translate(24, 452)">
      <rect x="0" y="0" width="272" height="64" rx="10" fill="#1e293b"/>
      <g transform="translate(14, 12)">
        <rect x="0" y="0" width="40" height="40" rx="4" fill="#ffffff"/>
        <!-- Mini QR pattern -->
        <rect x="4" y="4" width="12" height="12" fill="#000000"/>
        <rect x="24" y="4" width="12" height="12" fill="#000000"/>
        <rect x="4" y="24" width="12" height="12" fill="#000000"/>
        <rect x="18" y="18" width="6" height="6" fill="#000000"/>
      </g>
      <text x="68" y="28" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#ffffff">Scan &amp; Pay Instant</text>
      <text x="68" y="46" font-family="system-ui, sans-serif" font-size="9" font-weight="600" fill="#94a3b8">Quick salary advance via UPI</text>
    </g>
  </g>

  <!-- 6 NUMBERED CORE FEATURE BLOCKS (FLANKING PHONE) -->

  <!-- LEFT FLANK (01, 02, 03) -->
  <!-- 01 - DAILY TASKS -->
  <g transform="translate(50, 360)">
    <rect x="0" y="0" width="300" height="100" rx="18" fill="#ffffff" stroke="#e2e8f0" filter="url(#shadowFeature)"/>
    <g transform="translate(18, 20)">
      <rect x="0" y="0" width="60" height="60" rx="14" fill="#1e293b"/>
      <!-- Checklist Icon -->
      <polyline points="18,30 26,38 42,22" fill="none" stroke="#38bdf8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <g transform="translate(92, 34)">
      <text x="0" y="0" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#0f172a">01 — DAILY TASKS</text>
      <text x="0" y="22" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#475569">Organize and assign</text>
      <text x="0" y="38" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#475569">employee tasks every day.</text>
    </g>
  </g>

  <!-- 02 - PAYSLIPS & AUDIT -->
  <g transform="translate(50, 490)">
    <rect x="0" y="0" width="300" height="100" rx="18" fill="#ffffff" stroke="#e2e8f0" filter="url(#shadowFeature)"/>
    <g transform="translate(18, 20)">
      <rect x="0" y="0" width="60" height="60" rx="14" fill="#1e293b"/>
      <!-- Payslip Document Icon -->
      <rect x="16" y="14" width="28" height="34" rx="3" fill="none" stroke="#38bdf8" stroke-width="3.5"/>
      <line x1="22" y1="22" x2="38" y2="22" stroke="#38bdf8" stroke-width="3"/>
      <line x1="22" y1="30" x2="38" y2="30" stroke="#38bdf8" stroke-width="3"/>
    </g>
    <g transform="translate(92, 34)">
      <text x="0" y="0" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#0f172a">02 — PAYSLIPS &amp; AUDIT</text>
      <text x="0" y="22" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#475569">Maintain employee payslips</text>
      <text x="0" y="38" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#475569">and important records.</text>
    </g>
  </g>

  <!-- 03 - LEAVE MANAGEMENT -->
  <g transform="translate(50, 620)">
    <rect x="0" y="0" width="300" height="100" rx="18" fill="#ffffff" stroke="#e2e8f0" filter="url(#shadowFeature)"/>
    <g transform="translate(18, 20)">
      <rect x="0" y="0" width="60" height="60" rx="14" fill="#1e293b"/>
      <!-- Calendar Clock Icon -->
      <rect x="14" y="16" width="32" height="30" rx="4" fill="none" stroke="#38bdf8" stroke-width="3.5"/>
      <circle cx="34" cy="36" r="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>
    </g>
    <g transform="translate(92, 34)">
      <text x="0" y="0" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#0f172a">03 — LEAVE MANAGEMENT</text>
      <text x="0" y="22" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#475569">Track employee leave and</text>
      <text x="0" y="38" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#475569">attendance records.</text>
    </g>
  </g>

  <!-- RIGHT FLANK (04, 05, 06) -->
  <!-- 04 - WORKING HOURS -->
  <g transform="translate(730, 360)">
    <rect x="0" y="0" width="300" height="100" rx="18" fill="#ffffff" stroke="#e2e8f0" filter="url(#shadowFeature)"/>
    <g transform="translate(18, 20)">
      <rect x="0" y="0" width="60" height="60" rx="14" fill="#1e293b"/>
      <!-- Clock Icon -->
      <circle cx="30" cy="30" r="18" fill="none" stroke="#38bdf8" stroke-width="3.5"/>
      <polyline points="30,18 30,30 38,34" fill="none" stroke="#38bdf8" stroke-width="3.5" stroke-linecap="round"/>
    </g>
    <g transform="translate(92, 34)">
      <text x="0" y="0" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#0f172a">04 — WORKING HOURS</text>
      <text x="0" y="22" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#475569">Record and monitor</text>
      <text x="0" y="38" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#475569">employee working hours.</text>
    </g>
  </g>

  <!-- 05 - BROADCAST MESSAGES -->
  <g transform="translate(730, 490)">
    <rect x="0" y="0" width="300" height="100" rx="18" fill="#ffffff" stroke="#e2e8f0" filter="url(#shadowFeature)"/>
    <g transform="translate(18, 20)">
      <rect x="0" y="0" width="60" height="60" rx="14" fill="#1e293b"/>
      <!-- Megaphone Icon -->
      <path d="M 20 22 L 32 16 L 42 22 L 42 36 L 32 42 L 20 36 Z" fill="#38bdf8"/>
    </g>
    <g transform="translate(92, 30)">
      <text x="0" y="0" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#0f172a">05 — BROADCAST</text>
      <text x="0" y="16" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#0f172a">MESSAGES</text>
      <text x="0" y="34" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#475569">Send important announcements</text>
      <text x="0" y="48" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#475569">to entire team instantly.</text>
    </g>
  </g>

  <!-- 06 - WORK ACTIVITY -->
  <g transform="translate(730, 620)">
    <rect x="0" y="0" width="300" height="100" rx="18" fill="#ffffff" stroke="#e2e8f0" filter="url(#shadowFeature)"/>
    <g transform="translate(18, 20)">
      <rect x="0" y="0" width="60" height="60" rx="14" fill="#1e293b"/>
      <!-- Activity Bars -->
      <rect x="18" y="32" width="6" height="16" rx="2" fill="#38bdf8"/>
      <rect x="28" y="24" width="6" height="24" rx="2" fill="#38bdf8"/>
      <rect x="38" y="16" width="6" height="32" rx="2" fill="#38bdf8"/>
    </g>
    <g transform="translate(92, 34)">
      <text x="0" y="0" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#0f172a">06 — WORK ACTIVITY</text>
      <text x="0" y="22" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#475569">Monitor daily, weekly and</text>
      <text x="0" y="38" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#475569">monthly employee activity.</text>
    </g>
  </g>

  <g transform="translate(730, 740)">
    <text x="0" y="0" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#0f172a">
      And much more to keep your shop organized.
    </text>
  </g>

  <!-- BEFORE VS AFTER VISUAL STORY SECTION (Y: 1060 to 1480) -->
  <g transform="translate(0, 1070)">
    
    <!-- Left: Frustrated Shopkeeper with Paper Registers -->
    <g transform="translate(80, 0)">
      <!-- Loose paper graphics background -->
      <g opacity="0.85">
        <rect x="30" y="70" width="130" height="170" rx="6" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" transform="rotate(-8 95 155)"/>
        <text x="45" y="105" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#94a3b8" transform="rotate(-8 95 155)">PAPER REGISTERS</text>
        <line x1="45" y1="120" x2="145" y2="120" stroke="#e2e8f0" stroke-width="2" transform="rotate(-8 95 155)"/>
        <line x1="45" y1="135" x2="145" y2="135" stroke="#e2e8f0" stroke-width="2" transform="rotate(-8 95 155)"/>

        <rect x="180" y="110" width="140" height="90" rx="6" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" transform="rotate(6 250 155)"/>
        <text x="195" y="135" font-family="system-ui, sans-serif" font-size="10" font-weight="800" fill="#94a3b8" transform="rotate(6 250 155)">PAYSLIP</text>
        
        <!-- Sticky notes -->
        <rect x="80" y="40" width="60" height="50" rx="3" fill="#fef08a" transform="rotate(12 110 65)"/>
        <text x="86" y="65" font-family="system-ui, sans-serif" font-size="8" font-weight="700" fill="#854d0e" transform="rotate(12 110 65)">Attendance</text>
      </g>

      <!-- Shopkeeper Before Portrait -->
      <circle cx="270" cy="180" r="100" fill="#fee2e2" stroke="#fca5a5" stroke-width="3"/>
      <!-- Frustrated face & messy hair icon representation -->
      <circle cx="270" cy="165" r="45" fill="#fed7aa"/>
      <path d="M 230 150 Q 270 120 310 150 Q 270 135 230 150" fill="#451a03"/> <!-- hair -->
      <circle cx="255" cy="165" r="4" fill="#0f172a"/>
      <circle cx="285" cy="165" r="4" fill="#0f172a"/>
      <path d="M 255 185 Q 270 175 285 185" fill="none" stroke="#0f172a" stroke-width="3" stroke-linecap="round"/> <!-- frown -->
      <!-- Black Shop Apron -->
      <path d="M 225 210 L 315 210 L 330 290 L 210 290 Z" fill="#18181b"/>
      <!-- Hands holding head in stress -->
      <path d="M 220 180 Q 230 150 240 160" stroke="#ea580c" stroke-width="8" stroke-linecap="round"/>
      <path d="M 320 180 Q 310 150 300 160" stroke="#ea580c" stroke-width="8" stroke-linecap="round"/>
    </g>

    <!-- CENTER PILL: LIMITED TIME OFFER! ₹99 only -->
    <g transform="translate(540, 160)" text-anchor="middle">
      <ellipse cx="0" cy="0" rx="100" ry="70" fill="url(#offerBadgeGrad)" filter="url(#shadowP2Lg)"/>
      <text y="-26" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#14532d" letter-spacing="1">LIMITED</text>
      <text y="-10" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#14532d" letter-spacing="1">TIME OFFER!</text>
      
      <text y="14" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#1e293b">One-Time Annual</text>
      <text y="28" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#1e293b">Subscription</text>
      
      <text y="54" font-family="system-ui, sans-serif" font-size="28" font-weight="900" fill="#0f172a">₹99 only</text>
    </g>

    <!-- Right: Happy Modern Shopkeeper with GOGO LOG on Phone -->
    <g transform="translate(680, 0)">
      <circle cx="160" cy="180" r="100" fill="#dcfce7" stroke="#86efac" stroke-width="3"/>
      <!-- Happy shopkeeper with glasses -->
      <circle cx="160" cy="160" r="45" fill="#fed7aa"/>
      <path d="M 125 145 Q 160 120 195 145 Q 160 135 125 145" fill="#1c1917"/> <!-- groomed hair -->
      <!-- Glasses -->
      <circle cx="148" cy="160" r="10" fill="none" stroke="#0f172a" stroke-width="2.5"/>
      <circle cx="172" cy="160" r="10" fill="none" stroke="#0f172a" stroke-width="2.5"/>
      <line x1="158" y1="160" x2="162" y2="160" stroke="#0f172a" stroke-width="2.5"/>
      <!-- Smile -->
      <path d="M 148 180 Q 160 194 172 180" fill="none" stroke="#0f172a" stroke-width="3" stroke-linecap="round"/>
      <!-- Black Apron with shirt -->
      <path d="M 115 205 L 205 205 L 220 290 L 100 290 Z" fill="#18181b"/>
      <!-- Holding phone -->
      <rect x="195" y="190" width="36" height="65" rx="6" fill="#0284c7" stroke="#ffffff" stroke-width="2"/>
      <circle cx="213" cy="245" r="3" fill="#ffffff"/>
    </g>

    <!-- Transforming Arrow & Tagline -->
    <g transform="translate(540, 270)" text-anchor="middle">
      <text y="0" font-family="system-ui, sans-serif" font-size="24" font-weight="900" fill="#0f172a">
        From scattered records → to one organized system.
      </text>
    </g>

  </g>

  <!-- BOTTOM FOOTER CONVERSION BANNER (Dark Navy Gradient) -->
  <g transform="translate(0, 1680)">
    <rect x="0" y="0" width="1080" height="240" fill="#050a14"/>
    
    <!-- Left Copy -->
    <g transform="translate(60, 60)">
      <text x="0" y="0" font-family="system-ui, sans-serif" font-size="28" font-weight="900" fill="#ffffff">
        MAKE EMPLOYEE MANAGEMENT SIMPLE.
      </text>
      <text x="0" y="32" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#cbd5e1">
        Start managing your shop smarter with GOGO LOG for just ₹99.
      </text>
      <text x="0" y="58" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#cbd5e1">
        Special one-time annual subscription available.
      </text>
    </g>

    <!-- Right WhatsApp CTA -->
    <g transform="translate(660, 48)">
      <!-- WhatsApp Logo -->
      <circle cx="44" cy="44" r="40" fill="#22c55e"/>
      <path d="M 28 58 L 32 46 A 17 17 0 1 1 58 46 A 17 17 0 0 1 44 58 A 17 17 0 0 1 36 56 Z" fill="#ffffff"/>
      <path d="M 38 35 C 37 34 36 34 35 35 C 34 36 33 38 33 39 C 33 42 35 45 38 48 C 41 51 44 53 47 53 C 49 53 50 52 51 51 C 52 49 52 48 51 47 C 50 46 48 45 47 45 C 46 45 45 45 45 46 C 44 47 44 47 43 47 C 42 47 40 45 37 42 C 35 40 35 39 36 39 C 36 38 37 38 37 37 Z" fill="#22c55e"/>

      <!-- Text -->
      <text x="100" y="28" font-family="system-ui, sans-serif" font-size="18" font-weight="900" fill="#ffffff">
        GET THIS APPLICATION
      </text>
      <text x="100" y="52" font-family="system-ui, sans-serif" font-size="18" font-weight="900" fill="#22c55e">
        ONLY WITH WHATSAPP
      </text>
      <text x="100" y="82" font-family="system-ui, sans-serif" font-size="20" font-weight="900" fill="#ffffff">
        WhatsApp No: +91-9068254755
      </text>
    </g>
  </g>

</svg>
`;

fs.writeFileSync(path.join(publicAssetsDir, 'gogo-log-poster-1.svg'), poster1Svg.trim());
fs.writeFileSync(path.join(publicAssetsDir, 'gogo-log-poster-2.svg'), poster2Svg.trim());

console.log('SVG posters written successfully to public/assets/');

// Convert to PNG using ImageMagick / ffmpeg
try {
  console.log('Rendering SVG posters to PNG...');
  execSync(`ffmpeg -y -i "${path.join(publicAssetsDir, 'gogo-log-poster-1.svg')}" -vf "scale=1920:1080" "${path.join(publicAssetsDir, 'gogo-log-poster-1.png')}"`, { stdio: 'inherit' });
  execSync(`ffmpeg -y -i "${path.join(publicAssetsDir, 'gogo-log-poster-2.svg')}" -vf "scale=1080:1920" "${path.join(publicAssetsDir, 'gogo-log-poster-2.png')}"`, { stdio: 'inherit' });
  console.log('PNG posters generated successfully!');
} catch (err) {
  console.error('Error generating PNG:', err.message);
}
