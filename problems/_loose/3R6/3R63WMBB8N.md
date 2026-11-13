---
tag: 3R63WMBB8N
kind: problem
type: answer
answer: "4037"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0001.parquet#row=107
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst
    source: hf-mathnet
    label: France Préparation Olympique Française de Mathématiques
---
On considère une grille de taille $2019 \times 2019$. Sur cette grille sont posés des cailloux. Une configuration est dite belle s'il n'existe pas de parallélogramme formé par quatre cailloux $A B C D$, tels que $A, B, C$, et $D$ ne soient pas tous alignés.
Quel est le plus grand nombre de cailloux qu'il est possible de mettre dans une grille?
