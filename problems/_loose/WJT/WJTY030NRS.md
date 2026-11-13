---
tag: WJTY030NRS
kind: problem
type: answer
answer: all even n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0001.parquet#row=387
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst
    source: hf-mathnet
    label: France PRÉPARATION OLYMPIQUE FRANÇAISE DE MATHÉMATIQUES
---
Une partie se joue sur un échiquier de taille $n \times n$. Au début, il y a 99 pierres sur chaque case. Tour à tour, Aimeric et Benoit choisissent une ligne ou une colonne et retirent une pierre de chaque case de la ligne ou de la colonne choisie. Ils ne peuvent choisir une ligne ou une colonne que si elle comporte au moins une pierre sur chaque case. Le premier joueur qui ne peut pas se déplacer perd la partie. Aimeric joue le premier tour. Déterminer tous les $n$ pour lesquels Benoit a une stratégie gagnante.
