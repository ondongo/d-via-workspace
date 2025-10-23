#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Couleurs pour les logs
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

const log = (message, color = 'reset') => {
  console.log(`${colors[color]}${message}${colors.reset}`);
};

// Fonction pour lire le package.json
function readPackageJson() {
  const packagePath = path.join(__dirname, '..', 'package.json');
  return JSON.parse(fs.readFileSync(packagePath, 'utf8'));
}

// Fonction pour écrire le package.json
function writePackageJson(packageData) {
  const packagePath = path.join(__dirname, '..', 'package.json');
  fs.writeFileSync(packagePath, JSON.stringify(packageData, null, 2) + '\n');
}

// Fonction pour lire le ChangeLog
function readChangeLog() {
  const changelogPath = path.join(__dirname, '..', 'src', 'ChangeLog.mdx');
  return fs.readFileSync(changelogPath, 'utf8');
}

// Fonction pour écrire le ChangeLog
function writeChangeLog(content) {
  const changelogPath = path.join(__dirname, '..', 'src', 'ChangeLog.mdx');
  fs.writeFileSync(changelogPath, content);
}

// Fonction pour bump la version
function bumpVersion(currentVersion, type = 'patch') {
  const [major, minor, patch] = currentVersion.split('.').map(Number);
  
  switch (type) {
    case 'major':
      return `${major + 1}.0.0`;
    case 'minor':
      return `${major}.${minor + 1}.0`;
    case 'patch':
    default:
      return `${major}.${minor}.${patch + 1}`;
  }
}

// Fonction pour générer les changelog entries
function generateChangelogEntry(version, changes) {
  const date = new Date().toISOString().split('T')[0];
  
  let entry = `### Version ${version} - ${date}\n`;
  
  if (changes.features && changes.features.length > 0) {
    entry += '#### ✨ Nouvelles fonctionnalités\n';
    changes.features.forEach(feature => {
      entry += `- ${feature}\n`;
    });
    entry += '\n';
  }
  
  if (changes.improvements && changes.improvements.length > 0) {
    entry += '#### 🚀 Améliorations\n';
    changes.improvements.forEach(improvement => {
      entry += `- ${improvement}\n`;
    });
    entry += '\n';
  }
  
  if (changes.fixes && changes.fixes.length > 0) {
    entry += '#### 🐛 Corrections\n';
    changes.fixes.forEach(fix => {
      entry += `- ${fix}\n`;
    });
    entry += '\n';
  }
  
  if (changes.breaking && changes.breaking.length > 0) {
    entry += '#### ⚠️ Breaking Changes\n';
    changes.breaking.forEach(breaking => {
      entry += `- ${breaking}\n`;
    });
    entry += '\n';
  }
  
  return entry;
}

// Fonction principale
function autoBump() {
  try {
    log('🚀 Démarrage du bump automatique...', 'blue');
    
    // Lire le package.json actuel
    const packageData = readPackageJson();
    const currentVersion = packageData.version;
    
    log(`Version actuelle: ${currentVersion}`, 'yellow');
    
    // Demander le type de bump
    const args = process.argv.slice(2);
    const bumpType = args[0] || 'patch';
    
    if (!['major', 'minor', 'patch'].includes(bumpType)) {
      throw new Error('Type de bump invalide. Utilisez: major, minor, ou patch');
    }
    
    // Calculer la nouvelle version
    const newVersion = bumpVersion(currentVersion, bumpType);
    log(`Nouvelle version: ${newVersion}`, 'green');
    
    // Mettre à jour le package.json
    packageData.version = newVersion;
    writePackageJson(packageData);
    log('✅ package.json mis à jour', 'green');
    
    // Générer les changelog entries par défaut
    const changes = {
      features: [
        'Amélioration des composants existants',
        'Optimisation des performances'
      ],
      improvements: [
        'Mise à jour des dépendances',
        'Amélioration de la documentation'
      ],
      fixes: [
        'Correction de bugs mineurs'
      ]
    };
    
    // Générer l'entrée de changelog
    const changelogEntry = generateChangelogEntry(newVersion, changes);
    
    // Mettre à jour le ChangeLog
    const currentChangelog = readChangeLog();
    const updatedChangelog = currentChangelog.replace(
      '## Versions\n',
      `## Versions\n\n${changelogEntry}`
    );
    writeChangeLog(updatedChangelog);
    log('✅ ChangeLog mis à jour', 'green');
    
    // Build du package
    log('🔨 Build du package...', 'blue');
    execSync('npm run build', { stdio: 'inherit' });
    log('✅ Build terminé', 'green');
    
    // Commit et tag
    log('📝 Création du commit et tag...', 'blue');
    execSync(`git add .`, { stdio: 'inherit' });
    execSync(`git commit -m "chore: bump version to ${newVersion}"`, { stdio: 'inherit' });
    execSync(`git tag v${newVersion}`, { stdio: 'inherit' });
    log('✅ Commit et tag créés', 'green');
    
    // Push
    log('📤 Push vers GitHub...', 'blue');
    execSync(`git push origin main --tags`, { stdio: 'inherit' });
    log('✅ Push terminé', 'green');
    
    log(`🎉 Bump automatique terminé ! Version ${newVersion}`, 'green');
    
  } catch (error) {
    log(`❌ Erreur: ${error.message}`, 'red');
    process.exit(1);
  }
}

// Exécuter le script
autoBump();
