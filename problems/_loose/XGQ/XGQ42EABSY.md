---
tag: XGQ42EABSY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0001.parquet#row=58
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Soit $S$ un ensemble d'entiers. On dit que $S$ est insommable si, pour tous les entiers $x$ et $y$ appartenant à $S$, la somme $x+y$ n'appartient pas à $S$. Pour tout entier $n \geqslant 1$, on note $s_{n}$ le nombre de sous-ensembles de $\{1,2, \ldots, 2 n\}$ qui sont insommables.

Démontrer que $s_{n} \geqslant 2^{n}$.
