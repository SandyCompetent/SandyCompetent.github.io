#!/usr/bin/env bash

# ==============================================================================
# HOW TO USE THIS SCRIPT & PROJECT COMMANDS
# ==============================================================================
# 1. Standard Local Build & Astro Preview:
#    ./run.sh
#
# 2. Local Build & Firebase Hosting Emulator Preview:
#    ./run.sh --firebase
#
# 3. Development Server (with Hot Reload / HMR):
#    npm run dev
#
# 4. Production Deployment:
#    Simply push your commits to the 'main' branch:
#    git push origin main
#    (GitHub Actions will automatically build & deploy to both GitHub Pages
#     and Firebase Hosting).
# ==============================================================================

# Exit immediately if a command exits with a non-zero status
set -e

# Colors for formatted output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[0;33m'
CYAN='\033[0;36m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}==========================================${NC}"
echo -e "${BLUE}   Local Build & Preview Test             ${NC}"
echo -e "${BLUE}==========================================${NC}"

# Step 1: Ensure dependencies are installed
if [ ! -d "node_modules" ]; then
  echo -e "\n${YELLOW}[1/3] Installing dependencies...${NC}"
  npm install
else
  echo -e "\n${GREEN}[1/3] Dependencies verified.${NC}"
fi

# Step 2: Build the Astro static site locally
echo -e "\n${YELLOW}[2/3] Building production static site...${NC}"
npm run build

if [ ! -d "dist" ] || [ ! -f "dist/index.html" ]; then
  echo -e "${RED}Error: Build failed. 'dist/index.html' not found.${NC}"
  exit 1
fi
echo -e "${GREEN}✓ Production build successful ('dist/' created).${NC}"

# Step 3: Start local preview server
echo -e "\n${CYAN}[3/3] Starting local preview server...${NC}"
echo -e "${GREEN}Local build test is complete! Press Ctrl+C to exit preview.${NC}\n"

# Run local preview server using Astro or Firebase Emulator
if [ "$1" == "--firebase" ]; then
  npx -y firebase-tools@latest emulators:start --only hosting
else
  npx astro preview
fi
