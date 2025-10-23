# Guide de Release - Design System D-Via

## Processus de Release

### 1. Préparation de la Release

Avant de créer une nouvelle release, assurez-vous que :

- [ ] Tous les tests passent (`npm test`)
- [ ] Le build fonctionne (`npm run build`)
- [ ] Storybook se compile (`npm run build-storybook`)
- [ ] Le linting est propre (`npm run lint`)
- [ ] Le type checking passe (`npm run type-check`)
- [ ] Le CHANGELOG.md est à jour
- [ ] La version dans package.json est correcte

### 2. Types de Release

#### Release Majeure (Major) - X.0.0
- Changements incompatibles avec les versions précédentes
- Suppression de composants ou d'APIs
- Changements majeurs dans la structure

#### Release Mineure (Minor) - X.Y.0
- Nouvelles fonctionnalités
- Nouveaux composants
- Améliorations non-breaking
- Nouvelles variantes de composants existants

#### Release Patch (Patch) - X.Y.Z
- Corrections de bugs
- Améliorations de performance
- Mises à jour de documentation
- Corrections de styles

### 3. Étapes de Release

#### Étape 1 : Mise à jour de la version

```bash
# Pour une release patch
npm version patch

# Pour une release mineure
npm version minor

# Pour une release majeure
npm version major
```

#### Étape 2 : Build et test

```bash
# Nettoyer les builds précédents
npm run clean

# Build du design system
npm run build

# Test du build
npm run type-check
npm run lint
```

#### Étape 3 : Publication

```bash
# Publier sur npm
npm publish

# Ou pour un test en local
npm pack
```

#### Étape 4 : Tag Git

```bash
# Créer un tag pour la release
git tag -a v1.1.0 -m "Release version 1.1.0"
git push origin v1.1.0
```

### 4. Post-Release

#### Étape 1 : Mise à jour de la documentation

- [ ] Mettre à jour le README.md si nécessaire
- [ ] Créer une release sur GitHub avec les notes de changements
- [ ] Notifier l'équipe de la nouvelle version

#### Étape 2 : Intégration

- [ ] Mettre à jour les projets qui utilisent le design system
- [ ] Tester l'intégration dans d-via
- [ ] Vérifier que les nouveaux composants fonctionnent correctement

### 5. Rollback en cas de problème

Si une release pose problème :

```bash
# Désinstaller la version problématique
npm unpublish @d-via/design-system@1.1.0

# Revenir à la version précédente
npm install @d-via/design-system@1.0.0
```

### 6. Checklist de Release

#### Avant la Release
- [ ] Code review effectué
- [ ] Tests passent
- [ ] Documentation à jour
- [ ] CHANGELOG.md mis à jour
- [ ] Version bumpée dans package.json

#### Pendant la Release
- [ ] Build réussi
- [ ] Publication sur npm réussie
- [ ] Tag Git créé
- [ ] Push du tag effectué

#### Après la Release
- [ ] Release GitHub créée
- [ ] Équipe notifiée
- [ ] Intégration testée
- [ ] Documentation mise à jour

### 7. Communication

#### Template de communication

```

Installation :
npm install @d-via/design-system@1.1.0

Documentation : [Lien vers Storybook]
```

### 8. Monitoring

Après chaque release, surveiller :

- [ ] Taux d'adoption de la nouvelle version
- [ ] Issues ou bugs remontés
- [ ] Performance des nouveaux composants
- [ ] Feedback de l'équipe

### 9. Planification des Releases

#### Calendrier suggéré

- **Releases Patch** : Selon les besoins (corrections urgentes)
- **Releases Mineures** : Toutes les 2-3 semaines
- **Releases Majeures** : Tous les 2-3 mois

#### Planning des prochaines releases

- **v1.2.0** : Composants de navigation avancés, modales, tooltips
- **v1.3.0** : Composants de formulaire avancés, validation
- **v2.0.0** : Refactoring majeur, nouvelles couleurs, thème sombre

