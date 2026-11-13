---
tag: JDPSBEJ26H
kind: problem
type: answer
answer: All nonnegative integers congruent to 0 or 1 modulo 9
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0001.parquet#row=15
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
Pour tout entier naturel $n$, on note $S(n)$ la somme des chiffres de l'écriture décimale de $n$. On dit qu'un entier naturel $n$ est joli si $S(n)=S\left(n^{2}\right)$. Déterminer toutes les valeurs possibles de $S(n)$ pour les entiers jolis $n$.
