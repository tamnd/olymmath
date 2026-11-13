---
tag: KFMHB3RPHD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0001.parquet#row=196
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
Une suite réelle $a_{1}, \ldots, a_{k}$ est casable dans l'intervalle $[b, c]$ si il existe des réels $x_{0}, \ldots, x_{k}$ dans $[b, c]$ tels que $\left|x_{i}-x_{i-1}\right|=a_{i}$ pour $k \geqslant i \geqslant 1$. La suite est normalisée si ses termes sont tous inférieurs ou égaux à 1.

1) Montrer que pour tout entier $n \geqslant 1$, toute suite normalisée de longueur $2 \mathfrak{n}+1$ est casable dans $[0, 2-\frac{1}{2^{n}}]$.

2) Montrer que pour tout entier $n \geqslant 1$, il existe une suite normalisée de longueur $4 n+3$ qui n'est pas casable dans $[0,2-\frac{1}{2^{n}}]$.
