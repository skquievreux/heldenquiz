#!/usr/bin/env node

/**
 * Version Display Script
 * Zeigt die aktuelle Version und Versionsinformationen an
 */

const fs = require('fs');
const path = require('path');

const VERSION_FILE = path.join(__dirname, '..', 'version.json');

function loadVersionData() {
  try {
    const data = fs.readFileSync(VERSION_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Fehler beim Laden der Version-Datei:', error.message);
    process.exit(1);
  }
}

function displayVersionInfo(data) {
  console.log('🚀 ...Steffen T-Fox Techero-Quiz - Versionsinformationen');
  console.log('=' .repeat(60));
  console.log(`📦 Hauptversion:     ${data.version}`);
  console.log(`🔢 Semantisch:       ${data.major}.${data.minor}.${data.patch}`);
  console.log(`🖼️  Bildversion:     ${data.assets.images}`);
  console.log(`🎨 CSS-Version:      ${data.assets.css}`);
  console.log(`⚡ JS-Version:        ${data.assets.js}`);
  console.log(`📅 Letzte Änderung:  ${data.lastUpdated}`);
  console.log(`📝 Änderungen:       ${data.changelog}`);
  console.log('=' .repeat(60));

  if (data.preRelease) {
    console.log(`🏷️  Pre-Release:      ${data.preRelease}`);
  }
  if (data.build) {
    console.log(`🔨 Build:            ${data.build}`);
  }
}

function main() {
  const data = loadVersionData();
  displayVersionInfo(data);
}

if (require.main === module) {
  main();
}