---
tag: ZSDKRSCF8T
kind: problem
type: answer
answer: '3x3: 12; 4x4: 576'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0000.parquet#row=387
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
Combien de tableaux $3 \times 3$ peut-on construire en les remplissant avec les nombres de 1 à 3 tels qu'il n'y ait pas deux fois le même nombre dans une ligne ni dans une colonne. Et de tableaux $4 \times 4$ avec les nombres de 1 à 4 ?
