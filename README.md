# 🇸🇳 Intranet New Deal Technologique

Plateforme Intranet du Ministère de la Communication, des Télécommunications et du Numérique du Sénégal.

---

## 📁 Structure du projet

```
intranet-newdeal/
├── site/                          # Site HTML statique (template Forty adapté)
│   ├── index.html                 # Page principale personnalisée
│   └── assets/                    # CSS, JS, images du template
├── .github/
│   └── workflows/
│       ├── ci-dev.yml             # Pipeline CI – branche dev (3 jobs)
│       ├── cd-prod.yml            # Pipeline CD – branche prod (2 jobs)
│       └── ci-evolved.yml         # Pipeline évolué (slim + CRITICAL + email)
├── Dockerfile                     # Image nginx avec ARG pour slim
└── README.md
```

---

## 🔐 Secrets GitHub à configurer

Aller dans **Settings → Secrets and variables → Actions** du repo et ajouter :

| Secret               | Description                                          |
| -------------------- | ---------------------------------------------------- |
| `DOCKERHUB_USERNAME` | Ton nom d'utilisateur Docker Hub                     |
| `DOCKERHUB_TOKEN`    | Token d'accès Docker Hub (pas le mot de passe)       |
| `GITLEAKS_LICENSE`   | Clé de licence Gitleaks (optionnel sur dépôt public) |
| `MAIL_USERNAME`      | Email Gmail expéditeur                               |
| `MAIL_PASSWORD`      | Mot de passe application Gmail (pas le vrai mdp)     |
| `NOTIFY_EMAIL`       | Email destinataire des notifications                 |

---

## 🌿 Branches

| Branche | Rôle                   | Pipeline déclenché |
| ------- | ---------------------- | ------------------ |
| `dev`   | Développement et tests | `ci-dev.yml`       |
| `prod`  | Production stable      | `cd-prod.yml`      |

---

## ⚙️ Pipelines CI/CD

### CI – Branche `dev` (`ci-dev.yml`)

```
push → dev
  └─ Job 1: Build image Docker (nginx:alpine3.23)
  └─ Job 2: Scan sécurité (Trivy + Gitleaks)   [needs: build]
  └─ Job 3: Push vers Docker Hub                [needs: security-scan]
```

### CD – Branche `prod` (`cd-prod.yml`)

```
push → prod
  └─ Job 1: Scan sécurité (CRITICAL bloquant)
  └─ Job 2: Déploiement sur runner_prod         [needs: security-scan]
             → Container exposé sur port 80
```

### CI Évoluée (`ci-evolved.yml`)

```
push → dev
  └─ Job 1: Build avec nginx:alpine3.23-slim
  └─ Job 2: Scan Trivy (exit-code:1 si CRITICAL) [needs: build]
  └─ Job 3: Push Docker Hub                       [needs: security-scan]
  └─ notify-success (si succès)                   [needs: push]
  └─ notify-failure (si échec)                    [needs: tous]
```

---

## 🖥️ Runner self-hosted (prod)

Pour déployer sur `prod`, configurer un runner self-hosted avec le label `runner_prod` :

```bash
# Sur le serveur de production
mkdir actions-runner && cd actions-runner
# Télécharger le runner depuis GitHub → Settings → Actions → Runners
./config.sh --url https://github.com/TON_USER/intranet-newdeal --token TON_TOKEN --labels runner_prod
./run.sh
```

---

## 🧪 Tester localement

```bash
# Build
docker build -t intranet-newdeal:local .

# Run
docker run -d -p 8080:80 intranet-newdeal:local

# Ouvrir http://localhost:8080

# Scan Trivy local
trivy image intranet-newdeal:local
```

---

## 📬 Livrable

Fichier `NOM_PRENOM.docx` avec captures d'écran des pipelines.  
À envoyer à : `moussawade@groupeisi.com`  
Objet : `examen_devops_l3iage_2026`
