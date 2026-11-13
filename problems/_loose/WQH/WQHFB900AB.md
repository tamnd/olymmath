---
tag: WQHFB900AB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0000.parquet#row=326
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On note $S(k)$ la somme des chiffres d'un nombre entier $k$. On dit qu'un entier $a$ est d'ordre $n$ s'il existe une suite d'entiers $a_{0}, a_{1}, \ldots, a_{n}$ tels que $a_{n}=a$ et $a_{i+1}=a_{i}-S\left(a_{i}\right)$ pour tout $i=0,1, \ldots, n-1$. Montrer que pour tout entier $n \geqslant 1$ il existe un entier $b$ qui soit d'ordre $n$ mais qui ne soit pas d'ordre $n+1$.
