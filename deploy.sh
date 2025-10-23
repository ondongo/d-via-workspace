#!/bin/bash

# Script de déploiement pour D-Via
# Usage: ./deploy.sh [design-system|d-via-final|both]

set -e

# Couleurs pour les logs
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Fonction pour afficher les logs
log() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Fonction pour déployer le design system
deploy_design_system() {
    log "Déploiement du design system..."
    
    cd design-system-dvia
    
    # Build du design system
    log "Building design system..."
    npm run build
    
    # Bump version
    log "Bumping version..."
    npm version patch --no-git-tag-version
    
    # Commit changes
    git add .
    git commit -m "chore: bump version and build"
    
    # Push to GitHub
    log "Pushing to GitHub..."
    git push origin main
    
    cd ..
    log "Design system déployé avec succès!"
}

# Fonction pour déployer d-via-final
deploy_d_via_final() {
    log "Déploiement de d-via-final..."
    
    cd d-via-final
    
    # Update design system
    log "Updating design system..."
    npm update @d-via/design-system
    
    # Build application
    log "Building application..."
    npm run build
    
    # Commit changes
    git add .
    git commit -m "chore: update design system and build"
    
    # Push to GitHub
    log "Pushing to GitHub..."
    git push origin main
    
    cd ..
    log "d-via-final déployé avec succès!"
}

# Fonction pour déployer les deux
deploy_both() {
    log "Déploiement complet..."
    deploy_design_system
    sleep 5  # Attendre un peu entre les déploiements
    deploy_d_via_final
}

# Vérifier les arguments
if [ $# -eq 0 ]; then
    error "Usage: ./deploy.sh [design-system|d-via-final|both]"
    exit 1
fi

# Exécuter la commande appropriée
case $1 in
    "design-system")
        deploy_design_system
        ;;
    "d-via-final")
        deploy_d_via_final
        ;;
    "both")
        deploy_both
        ;;
    *)
        error "Commande invalide: $1"
        error "Usage: ./deploy.sh [design-system|d-via-final|both]"
        exit 1
        ;;
esac

log "Déploiement terminé!"
