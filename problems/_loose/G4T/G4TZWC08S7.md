---
tag: G4TZWC08S7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=2545
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On considère une rangée de cases numérotées $0,1, \ldots, k$ de gauche à droite où, pour chaque $i \geqslant 1$, la case numéro $i$ contient $x_{i}$ jetons. Il n'y a initialement aucun jeton sur la case numéro 0 . A tour de rôle, Alice et Bob jouent alors selon les règles suivantes :

- Bob choisit un ensemble $S$ de jetons, pas forcément tous sur la même case.
- Alice peut ensuite soit éliminer tous les jetons qui ne sont pas dans $S$ mais alors déplacer chaque jeton de $S$ de la case qu'il occupe à la case voisine à sa gauche (un tel jeton passe donc d'une case numéro $i$ à la case numéro $i-1$, soit éliminer tous les jetons qui sont dans $S$ mais alors déplacer chaque jeton qui n'est pas dans $S$ de la case qu'il occupe à la case voisine à sa gauche.
Bob gagne la partie s'il arrive à amener un jeton sur la case numéro 0, et Alice gagne si elle arrive à éliminer tous les jetons.

1) Prouver qu'Alice possède une stratégie gagnante si $\sum_{i=1}^{k} 2^{-i} x_{i}<1$.
2) Est-il vrai que si $\sum_{i=1}^{k} 2^{-i} x_{i} \geqslant 1$ alors Bob possède une stratégie gagnante?
