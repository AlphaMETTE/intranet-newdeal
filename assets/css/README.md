# Architecture CSS - Intranet Ministère de la Communication

## 📋 Organisation

Le CSS a été refactorisé et restructuré de manière professionnelle dans `/assets/css/custom.css`.

### Structure modulaire

```
1. VARIABLES CSS              → Thème, couleurs, espacement, ombres
2. RÉINITIALISATION           → Reset global, styles de base
3. TYPOGRAPHIE                → h1-h6, paragraphes, liens
4. COMPOSANTS BOUTONS         → Tous les boutons réutilisables
5. COMPOSANTS BADGE           → Badge du New Deal
6. HEADER ET NAVIGATION       → Barre de navigation principale
7. MENU PRINCIPAL             → Sidebar/modal menu
8. BANNER                     → Section principale héroïque
9. SECTION TUILES             → Grid de services
10. SECTION PRÉSENTATION      → Section "About"
11. FOOTER                    → Pied de page
12. RESPONSIVE DESIGN         → Mobile, tablette, desktop
13. UTILITAIRES               → Classes helpers, a11y
```

## 🎨 Système de namespacing

- **Couleurs primaires** : `--color-primary`, `--color-secondary`, `--color-accent`
- **Typographie** : `--font-size-*`, `--line-height-*`
- **Espacement** : `--spacing-xs` à `--spacing-4xl`
- **Ombres** : `--shadow-xs` à `--shadow-xl`
- **Transitions** : `--transition-fast`, `--transition-base`, `--transition-slow`

## 📱 Responsive Design

- **Desktop** : `>1200px` - Grid complet
- **Tablette** : `768px-1199px` - Layout adapté
- **Mobile** : `<576px` - Stack vertical, menu sidebar

## ✨ Améliorations principales

✅ CSS structuré et maintenable
✅ Variables CSS centralisées
✅ Responsive mobile-first
✅ Système de composants réutilisables
✅ Ombres et transitions cohérentes
✅ Accessibilité (focus-visible)
✅ Menu mobile interactif
✅ Pas de CSS inline
✅ Commentaires de section clairs

## 🎯 Points clés

- **Header** : Fixe, hauteur 66px, avec padding pour la bande tricolore
- **Menu** : Slide-in depuis la droite sur mobile/tablette
- **Banner** : Gradient subtil, bordure verte à gauche
- **Services** : Grid responsive, tuiles avec hover effect
- **Footer** : Section sombre avec iconographie sociale
- **Boutons** : Styles primaire et secondaire, transitions fluides

## 🔧 Utilisation

Importer le CSS dans le `<head>` :

```html
<link rel="stylesheet" href="assets/css/custom.css" />
```

## 📚 JavaScript complémentaire

L'interactivité du menu mobile est gérée par :
- `/assets/js/menu.js` - Gestion du toggle et fermeture du menu
