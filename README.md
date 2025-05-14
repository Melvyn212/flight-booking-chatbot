# Flight Booking Chatbot

Un chatbot moderne et interactif pour la réservation de vols, avec une interface utilisateur élégante et des fonctionnalités avancées.

## Fonctionnalités

- Interface utilisateur moderne avec effets visuels 3D
- Chat interactif pour la recherche de vols
- Design responsive et animations fluides
- Intégration avec une API de réservation de vols
- Interface utilisateur intuitive et élégante

## Prérequis

- Node.js (version 14 ou supérieure)
- Python 3.8 ou supérieur
- npm ou yarn

## Installation

### Backend (Python/Flask)

1. Naviguez vers le dossier backend :
```bash
cd flight-booking-chatbot/backend
```

2. Créez un environnement virtuel Python :
```bash
python -m venv venv
```

3. Activez l'environnement virtuel :
- Sur Windows :
```bash
venv\Scripts\activate
```
- Sur macOS/Linux :
```bash
source venv/bin/activate
```

4. Installez les dépendances :
```bash
pip install -r requirements.txt
```

5. Lancez le serveur backend :
```bash
python app.py
```

### Frontend (Angular)

1. Dans un nouveau terminal, naviguez vers le dossier du projet :
```bash
cd flight-booking-chatbot
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
ng serve
```

4. Ouvrez votre navigateur et accédez à `http://localhost:4200`

## Structure du Projet

```
flight-booking-chatbot/
├── backend/           # Serveur Flask
│   ├── app.py        # Application principale
│   └── requirements.txt
├── src/              # Code source Angular
│   ├── app/
│   │   ├── components/
│   │   ├── services/
│   │   └── models/
│   └── assets/
└── package.json      # Dépendances Node.js
```

## Utilisation

1. Assurez-vous que le backend est en cours d'exécution
2. Ouvrez l'application dans votre navigateur
3. Commencez à discuter avec le chatbot pour rechercher des vols
4. Suivez les instructions du chatbot pour compléter votre réservation

## Technologies Utilisées

- Frontend :
  - Angular
  - SCSS
  - TypeScript
  - HTML5/CSS3

- Backend :
  - Python
  - Flask
  - SQLite

## Support

Pour toute question ou problème, n'hésitez pas à ouvrir une issue sur le dépôt GitHub.

## Licence

Ce projet est sous licence MIT.
