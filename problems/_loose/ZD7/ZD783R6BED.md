---
tag: ZD783R6BED
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=2201
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On considère un 2022-gone régulier de côté 1 . Les points sont numérotés $A_{1}, \ldots, A_{2022}$ dans un certain ordre. Au départ, Elie part du point $A_{1}$, puis saute de point en point vers le point $A_{2}$, puis de $A_{2}$ vers $A_{3}$ etc... chaque fois en prenant l'arc le plus court. Lorsqu'il atteint $A_{2022}$, il rejoint finalement $A_{1}$. Déterminer la valeur maximale de la somme des longueurs des arcs qu'a parcouru Elie, parmi toutes les numérotations de points possibles.
