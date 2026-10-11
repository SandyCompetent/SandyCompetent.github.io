#!/usr/bin/env bash

# Exit immediately if a command exits with a non-zero status
set -e

# Colors for formatted output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[0;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}==========================================${NC}"
echo -e "${BLUE}   Deploying Astro Site to Firebase       ${NC}"
echo -e "${BLUE}==========================================${NC}"

# Step 1: Ensure dependencies are installed
if [ ! -d "node_modules" ]; then
  echo -e "\n${YELLOW}[1/3] Node modules missing. Installing dependencies...${NC}"
  npm install
else
  echo -e "\n${GREEN}[1/3] Dependencies verified.${NC}"
fi

# Step 2: Build the Astro static site
echo -e "\n${YELLOW}[2/3] Building production static site...${NC}"
npm run build

if [ ! -d "dist" ] || [ ! -f "dist/index.html" ]; then
  echo -e "${RED}Error: Build failed. 'dist/index.html' not found.${NC}"
  exit 1
fi
echo -e "${GREEN}✓ Production build successful ('dist/' created).${NC}"

# Step 3: Deploy to Firebase Hosting
echo -e "\n${YELLOW}[3/3] Deploying to Firebase Hosting...${NC}"

# Use local/global firebase CLI
if command -v firebase &> /dev/null; then
  FIREBASE_CMD="firebase"
else
  FIREBASE_CMD="npx firebase-tools"
fi

# Execute Firebase deployment
$FIREBASE_CMD deploy --only hosting "$@"

echo -e "\n${GREEN}==========================================${NC}"
echo -e "${GREEN}   🚀 Deployment Complete!                ${NC}"
echo -e "${GREEN}==========================================${NC}"
