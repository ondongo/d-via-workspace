#!/bin/bash

# Script de déploiement pour d-via-workspace
echo "🚀 Déploiement de d-via-workspace..."

# Variables
VERCEL_TOKEN="hDA7XI30zcrLes1euFYmkDsB"
PROJECT_ID_DESIGN_SYSTEM="d-via-workspace-design-system-dvia"
PROJECT_ID_D_VIA_FINAL="d-via-workspace-d-via"

# 1. Déployer le design system
echo "📦 Déploiement du design system..."
cd design-system-dvia
vercel --token=$VERCEL_TOKEN --prod --yes
cd ..

# 2. Attendre que le design system soit déployé
echo "⏳ Attente du déploiement du design system..."
sleep 30

# 3. Déployer d-via-final
echo "🌐 Déploiement de d-via-final..."
cd d-via-final
vercel --token=$VERCEL_TOKEN --prod --yes
cd ..

echo "✅ Déploiement terminé !"
echo "Design System: https://d-via-workspace-design-system-dvia.vercel.app"
echo "D-Via Final: https://d-via-workspace-design-system-dvia.vercel.app"