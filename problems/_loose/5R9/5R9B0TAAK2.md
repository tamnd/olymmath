---
tag: 5R9B0TAAK2
kind: problem
type: answer
answer: All even n and all odd n at least 2021.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0001.parquet#row=281
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Soit $P(X)$ un polynôme à coefficients réels unitaire de degré $2022$. Emile joue au jeu suivant : il écrit le polynôme $P(X)$ au tableau et à chaque étape, si le polynôme $f(X)$ est écrit au tableau, Emile peut le remplacer par :
- Le polynôme $f(X)+c$, pour $c$ un réel de son choix, ou
- le polynôme $P(f(X))$.

Trouver tous les entiers positifs ou nuls $n$ tels que, quelque soit le polynôme $P$ initial, Emile peut trouver une suite d'opérations telles que le polynôme obtenu ait exactement $n$ racines réelles distinctes.
