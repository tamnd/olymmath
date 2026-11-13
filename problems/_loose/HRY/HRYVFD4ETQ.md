---
tag: HRYVFD4ETQ
kind: problem
type: answer
answer: All positive integers n that are multiples of p
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0000.parquet#row=68
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Soit $p$ un nombre premier. Trouver tous les entiers $n \geqslant 1$ tels que pour tout entier $a \geqslant 1$, si $a^{n}-1$ est divisible par $p$, alors $a^{n}-1$ est aussi divisible par $p^{2}$.
