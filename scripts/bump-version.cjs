#!/usr/bin/env node

/**
 * Version Bump Script
 * Erhöht die Version entsprechend dem angegebenen Typ
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

function saveVersionData(data) {
  try {
    fs.writeFileSync(VERSION_FILE, JSON.stringify(data, null, 2));
    console.log('Version erfolgreich aktualisiert!');
  } catch (error) {
    console.error('Fehler beim Speichern der Version-Datei:', error.message);
    process.exit(1);
  }
}

function formatVersion(major, minor, patch) {
  return `${major}.${minor}.${patch}`;
}

function bumpPatch(data) {
  data.patch += 1;
  data.version = formatVersion(data.major, data.minor, data.patch);
  data.lastUpdated = new Date().toISOString().split('T')[0];
  data.changelog = 'Bug fixes and improvements';
  console.log(`Patch-Version erhöht: ${data.version}`);
}

function bumpMinor(data) {
  data.minor += 1;
  data.patch = 0;
  data.version = formatVersion(data.major, data.minor, data.patch);
  data.lastUpdated = new Date().toISOString().split('T')[0];
  data.changelog = 'New features added';
  console.log(`Minor-Version erhöht: ${data.version}`);
}

function bumpMajor(data) {
  data.major += 1;
  data.minor = 0;
  data.patch = 0;
  data.version = formatVersion(data.major, data.minor, data.patch);
  data.lastUpdated = new Date().toISOString().split('T')[0];
  data.changelog = 'Major version update with breaking changes';
  console.log(`Major-Version erhöht: ${data.version}`);
}

function bumpImage(data) {
  const currentImageVersion = data.assets.images.split('.');
  const patch = parseInt(currentImageVersion[2]) + 1;
  data.assets.images = `${currentImageVersion[0]}.${currentImageVersion[1]}.${patch}`;
  data.lastUpdated = new Date().toISOString().split('T')[0];
  console.log(`Bild-Version erhöht: ${data.assets.images}`);
}

function main() {
  const args = process.argv.slice(2);
  const bumpType = args[0];

  if (!bumpType) {
    console.log('Verwendung: node bump-version.js <patch|minor|major|image>');
    console.log('Beispiele:');
    console.log('  npm run version:patch  # Bug-Fixes');
    console.log('  npm run version:minor  # Neue Features');
    console.log('  npm run version:major  # Breaking Changes');
    console.log('  npm run version:image  # Neue Bildversion');
    process.exit(1);
  }

  const data = loadVersionData();

  switch (bumpType.toLowerCase()) {
    case 'patch':
      bumpPatch(data);
      break;
    case 'minor':
      bumpMinor(data);
      break;
    case 'major':
      bumpMajor(data);
      break;
    case 'image':
      bumpImage(data);
      break;
    default:
      console.error(`Unbekannter Bump-Typ: ${bumpType}`);
      console.log('Verfügbare Typen: patch, minor, major, image');
      process.exit(1);
  }

  saveVersionData(data);

  // Package.json ebenfalls aktualisieren
  const packagePath = path.join(__dirname, '..', 'package.json');
  try {
    const packageData = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    packageData.version = data.version;
    fs.writeFileSync(packagePath, JSON.stringify(packageData, null, 2));
    console.log('package.json ebenfalls aktualisiert!');
  } catch (error) {
    console.warn('Warnung: package.json konnte nicht aktualisiert werden:', error.message);
  }
}

if (require.main === module) {
  main();
}