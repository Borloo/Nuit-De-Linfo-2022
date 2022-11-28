# Nuit De L'info 2022

## Ca Marche Même Plus En Local

### Récupération du projet en local

Ligne de commande : 

```bash 

git clone https://github.com/Borloo/Nuit-De-Linfo-2022.git

```

GitKraken :

<img src="./images/readme/clone_repo.png" alt="">

<img src="./images/readme/clone_repo_url.png" alt="">

### Créer une nouvelle branche feature

Règles : 

TOUJOURS mettre à jour localement la branche develop avant de créer la branche

- Pour dev :

Ligne de commande : 

```bash

git checkout develop
git pull
git checkout -b feature/name_feature

```

GitKraken : 

<img src="./images/readme/create_branche.png">

### Commit and push 

Règles :

Pour une feature :

- Seul : Commit and push autant que tu veux
- Plusieurs : Préférer le push lorsque le résultat est satisfaisant et intéressant que les autres l'ai, commit à foison

Ligne de commande : 

```bash

git add .
git commit -m "message"
git push feature/feature-name

```

GitKraken :

<img src="./images/readme/commit.png">

<img src="./images/readme/push.png">

### Merge Request feature -> develop

Règles : 

Avant de faire le merge entre sa feature et develop, inspecter le code et supprimer tout test local (print, dump)

Ligne de comlande :

```bash

git checkout -b branche-name
git add .
git commit -m "message"
git checkout develop
git merge 
git push

```

GitKraken :

