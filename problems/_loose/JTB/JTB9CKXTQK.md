---
tag: JTB9CKXTQK
kind: problem
type: answer
answer: r_{\}={\begin{pmatrix}n^{2},&n\leqslant2;\\7,&n\geqslant30\end{pmatrix}.}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=106245
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
It is known that an $n \times n \times n$ cube is composed of $n^{3}$ unit cubes (referred to as "cells"). For any two cells $A$ and $B$, if they share a common face, or there exists a cell $C$ such that $A$ and $B$ both share a common face with $C$, then the cells $A$ and $B$ are called "adjacent". Now, each cell of the $n \times n \times n$ cube is colored with one of $r$ colors, such that any two adjacent cells have different colors. Find the minimum value of $r$.
