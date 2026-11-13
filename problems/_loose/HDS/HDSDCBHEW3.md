---
tag: HDSDCBHEW3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0001.parquet#row=78
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Soit $f: \mathbb{Z} \to \mathbb{R}$ une fonction telle que
$$
f(n+2) = (f(n+1) + f(n)) / 2
$$
pour tout entier $n$. On suppose que $f$ est bornée, c'est-à-dire qu'il existe un réel $F$ tel que $-F \leqslant f(n) \leqslant F$ pour tout $n$.

Démontrer que $f$ est une fonction constante.
