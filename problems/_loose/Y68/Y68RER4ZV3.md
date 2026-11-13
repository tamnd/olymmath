---
tag: Y68RER4ZV3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0001.parquet#row=373
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Soit $\mathbb{Z}[X]$ l'ensemble des polynômes à coefficients entiers. Trouver toutes les fonctions $f: \mathbb{Z}[X] \rightarrow \mathbb{Z}[X]$ telles que pour tous $P, Q \in \mathbb{Z}[X]$ et $r \in \mathbb{Z}$, on ait
$$
P(r)|Q(r) \Longleftrightarrow (f(P))(r)|(f(Q))(r)
$$
