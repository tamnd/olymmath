---
tag: G9YG3VQJEB
kind: problem
type: answer
answer: a_n = n + c + 1 for all n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0001.parquet#row=406
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Soit $c$ un entier positif ou nul. Trouver toutes les suites d'entiers strictement positifs $a_{1}, a_{2}, \ldots$ telles que pour tout entier strictement positif $n$, $a_{n}$ soit égal au nombre d'entiers $i$ vérifiant $a_{i} \leqslant a_{n+1}+c$.
