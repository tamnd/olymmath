---
tag: VD4DYNXPY7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0000.parquet#row=126
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
Dans tout l'exercice, on s'intéresse à des tableaux $5 \times 5$, dont les lignes (resp. les colonnes) sont notées $L_{0}, L_{1}, L_{2}, L_{3}, L_{4}$ du bas vers le haut (resp. $C_{0}, C_{1}, C_{2}, C_{3}, C_{4}$, de gauche à droite).
Dans chacune des 25 cases d'un tel tableau, on écrit un nombre. Le nombre qui est dans la case située sur la ligne $L_{i}$ et la colonne $C_{j}$ est noté $f(i, j)$.
Un tableau est dit cohérent lorsque, pour tous $i$ et $j$ :
Le nombre $f(i, j)$ est le nombre de $i$ écrits dans les cases de la ligne $L_{j}$.
Déterminer tous les tableaux cohérents de taille $5 \times 5$.
