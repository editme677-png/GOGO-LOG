const fs = require('fs');
const path = require('path');
const QRCode = require('qrcode');

const targetUrl = "https://gogo-log.ai.studio";
const assetsDir = path.join(__dirname, '../public/assets');

async function run() {
  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
  }

  // 1. Generate standalone QR code SVG and PNG
  const qrSvgRaw = await QRCode.toString(targetUrl, {
    type: 'svg',
    margin: 1,
    color: {
      dark: '#000000',
      light: '#ffffff'
    },
    errorCorrectionLevel: 'M'
  });

  const qrSvgPath = path.join(assetsDir, 'gogo-log-qr-code.svg');
  fs.writeFileSync(qrSvgPath, qrSvgRaw);

  const qrPngPath = path.join(assetsDir, 'gogo-log-qr-code.png');
  await QRCode.toFile(qrPngPath, targetUrl, {
    width: 600,
    margin: 1,
    color: {
      dark: '#000000',
      light: '#ffffff'
    },
    errorCorrectionLevel: 'M'
  });

  // 2. Generate the Exact "Scan with Phone" Card SVG (identical to the user's uploaded Chrome screenshot)
  const qrSvgInner = await QRCode.toString(targetUrl, {
    type: 'svg',
    margin: 0,
    color: {
      dark: '#000000',
      light: '#ffffff'
    },
    errorCorrectionLevel: 'M'
  });

  // Extract inner svg content or paths
  const svgViewBoxMatch = qrSvgInner.match(/viewBox="([^"]+)"/i);
  const innerViewBox = svgViewBoxMatch ? svgViewBoxMatch[1] : '0 0 25 25';
  const svgContentMatch = qrSvgInner.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
  const innerSvgData = svgContentMatch ? svgContentMatch[1] : '';

  const fullCardSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
  <defs>
    <filter id="soft-card-shadow" x="-5%" y="-5%" width="110%" height="110%" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="6" stdDeviation="16" flood-color="#000000" flood-opacity="0.08" />
    </filter>
  </defs>

  <!-- Clean Background Canvas -->
  <rect width="600" height="600" fill="#ffffff" />

  <!-- The White Rounded Card with gentle border and shadow -->
  <rect x="30" y="20" width="540" height="560" rx="44" fill="#ffffff" stroke="#e5e7eb" stroke-width="4" filter="url(#soft-card-shadow)" />

  <!-- Inner QR Code -->
  <g transform="translate(85, 55)">
    <svg width="430" height="430" viewBox="${innerViewBox}" shape-rendering="crispEdges">
      ${innerSvgData}
    </svg>
  </g>

  <!-- "Scan with Phone" Text (Exact typography from Chrome Android share sheet) -->
  <text x="300" y="535" 
        text-anchor="middle" 
        font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" 
        font-size="40" 
        font-weight="500" 
        letter-spacing="-0.5" 
        fill="#5f6368">Scan with Phone</text>
</svg>`;

  const cardSvgPath = path.join(assetsDir, 'gogo-log-qr-card.svg');
  fs.writeFileSync(cardSvgPath, fullCardSvg);
  fs.writeFileSync(path.join(assetsDir, 'gogo-log-qr.svg'), fullCardSvg);

  // Copy gogo-log-qr-code.png to gogo-log-qr.png
  fs.copyFileSync(qrPngPath, path.join(assetsDir, 'gogo-log-qr.png'));
  
  // Copy to dist/assets if dist exists
  const distAssetsDir = path.join(__dirname, '../dist/assets');
  if (fs.existsSync(distAssetsDir)) {
    fs.copyFileSync(qrSvgPath, path.join(distAssetsDir, 'gogo-log-qr-code.svg'));
    fs.copyFileSync(qrPngPath, path.join(distAssetsDir, 'gogo-log-qr-code.png'));
    fs.copyFileSync(cardSvgPath, path.join(distAssetsDir, 'gogo-log-qr-card.svg'));
    fs.copyFileSync(cardSvgPath, path.join(distAssetsDir, 'gogo-log-qr.svg'));
    fs.copyFileSync(qrPngPath, path.join(distAssetsDir, 'gogo-log-qr.png'));
  }

  console.log("Successfully generated QR assets for " + targetUrl);
}

run().catch(err => {
  console.error("Error generating QR:", err);
  process.exit(1);
});
