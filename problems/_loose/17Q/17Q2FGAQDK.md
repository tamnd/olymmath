---
tag: 17Q2FGAQDK
kind: problem
type: answer
answer: "4"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0001.parquet#row=336
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
Dans un tournoi organisé entre 6 équipes, chaque équipe joue contre chaque autre équipe exactement une fois. Lorsqu'une équipe gagne, elle obtient 3 points, et l'équipe perdante reçoit 0 point. Si la partie est nulle, les deux équipes reçoivent un point. Déterminez les $a$ pour lesquels il est possible que les scores finaux des équipes puissent être les six nombres consécutifs $a, a+1, \ldots, a+5$ ?
