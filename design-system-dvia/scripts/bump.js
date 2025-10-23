#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

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

// Fonction principale
function bump() {
  try {
    console.log('🚀 Bump automatique du design system...');
    
    // Lire le package.json actuel
    const packageData = readPackageJson();
    const currentVersion = packageData.version;
    
    console.log(`Version actuelle: ${currentVersion}`);
    
    // Type de bump et mode (patch par défaut)
    const args = process.argv.slice(2);
    const bumpType = args[0] || 'patch';
    const mode = args[1] || 'auto'; // auto, direct, pr
    
    // Calculer la nouvelle version
    const newVersion = bumpVersion(currentVersion, bumpType);
    console.log(`Nouvelle version: ${newVersion}`);
    console.log(`Mode: ${mode}`);
    
    // Mettre à jour le package.json
    packageData.version = newVersion;
    writePackageJson(packageData);
    console.log('✅ package.json mis à jour');
    
    // Mettre à jour le ChangeLog
    const currentChangelog = readChangeLog();
    const date = new Date().toISOString().split('T')[0];
    
    const newEntry = `### Version ${newVersion} - ${date}
- Amélioration des composants existants
- Optimisation des performances
- Mise à jour des dépendances

`;
    
    const updatedChangelog = currentChangelog.replace(
      '## Versions\n',
      `## Versions\n\n${newEntry}`
    );
    writeChangeLog(updatedChangelog);
    console.log('✅ ChangeLog mis à jour');
    
    // Build du package
    console.log('🔨 Build du package...');
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Build terminé');
    
    // Commit et tag
    console.log('📝 Création du commit et tag...');
    execSync(`git add .`, { stdio: 'inherit' });
    execSync(`git commit -m "chore: bump version to ${newVersion}"`, { stdio: 'inherit' });
    execSync(`git tag v${newVersion}`, { stdio: 'inherit' });
    console.log('✅ Commit et tag créés');
    
    // Push
    console.log('📤 Push vers GitHub...');
    execSync(`git push origin main --tags`, { stdio: 'inherit' });
    console.log('✅ Push terminé');
    
    // Déclencher la mise à jour de d-via-final selon le mode
    if (mode === 'direct') {
      console.log('🔄 Déclenchement de la mise à jour directe de d-via-final...');
      // Le workflow se déclenchera automatiquement en mode direct
    } else if (mode === 'pr') {
      console.log('🔄 Déclenchement de la création de PR pour d-via-final...');
      // Le workflow se déclenchera automatiquement en mode PR
    } else {
      console.log('🔄 Déclenchement automatique selon le contexte...');
      // Le workflow déterminera automatiquement le mode
    }
    
    console.log(`🎉 Bump terminé ! Version ${newVersion}`);
    console.log('📋 Prochaines étapes:');
    console.log('   - GitHub Actions va mettre à jour d-via-final');
    console.log('   - Déploiement automatique sur Vercel');
    
  } catch (error) {
    console.error(`❌ Erreur: ${error.message}`);
    process.exit(1);
  }
}

// Exécuter le script
bump();
