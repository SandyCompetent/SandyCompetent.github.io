#!/usr/bin/env bash
# Regenerates public/og-image.png (1200x630) from scripts/og-image.html using headless Chrome.
# Edit the HTML, run `npm run og`, commit the PNG. Set CHROME_PATH if Chrome is elsewhere.
set -euo pipefail
cd "$(dirname "$0")/.."
CHROME="${CHROME_PATH:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
"$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
  --window-size=1200,630 --screenshot="$PWD/public/og-image.png" "file://$PWD/scripts/og-image.html" >/dev/null 2>&1
echo "wrote public/og-image.png"
