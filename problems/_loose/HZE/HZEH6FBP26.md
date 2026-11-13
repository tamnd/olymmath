---
tag: HZEH6FBP26
kind: problem
type: answer
answer: a) 2; b) 2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0000.parquet#row=183
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst
    source: hf-mathnet
    label: France Olympiades Françaises de Mathématiques
---
Dans le plan, on considère l'ensemble $S$ des points de coordonnées $(x, y)$, où $x, y \in \{1,2, \ldots, 2013\}$. Deux points de $S$ sont dits voisins s'ils sont à une distance $1$ l'un de l'autre. À chaque seconde, une mouche et des araignées se déplacent sur les points de $S$ de la façon suivante : tout d'abord, la mouche soit ne bouge pas, soit va sur un point voisin de celui sur lequel elle se trouve. Puis, chaque araignée soit ne bouge pas, soit va sur un point voisin de celui sur lequel elle se trouve. Plusieurs araignées peuvent se trouver simultanément sur un même point, et la mouche ainsi que les araignées connaissent les positions respectives des unes et des autres.

a) Déterminer le plus petit entier $k$ pour lequel $k$ araignées pourront toujours finir par attraper la mouche en un temps fini, et ce quelles que soient les positions initiales de la mouche et des araignées sur les points de $S$.

b) Répondre à la même question si l'on suppose cette fois que l'on est dans l'espace usuel et que $S$ est l'ensemble des points de coordonnées $(x, y, z)$ où $x, y, z \in \{1,2, \ldots, 2013\}$.
