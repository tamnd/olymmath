---
tag: 51AGEZDGVN
kind: problem
type: answer
answer: "7"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0001.parquet#row=132
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
Martin cherche à remplir chaque case d'une grille rectangulaire ayant 8 lignes et $n$ colonnes avec l'une des quatre lettres $\{P\}, \{O\}, \{F\}$ et $M$ de sorte que pour toute paire de lignes distinctes, il existe au plus une colonne telle que ses intersections avec les deux lignes sont des cases ayant la même lettre. Quel est le plus grand entier $n$ tel que cela est possible?
