---
tag: ECDNW3H2J3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=264021
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A $\textit{lattice point}$ of the coordinate plane is a point $(x,y)$ in which both $x$ and $y$ are integers. Let $k\geq2$ be a positive integer. Find the smallest positive integer $c_k$ (which may depend on $k$) such that every lattice point can be colored with one of $c_k$ colors, subject to the following two conditions:

- If $(x,y)$ and $(a,b)$ are two distinct neighboring points; that is, $|x-a|\leq1$ and $|y-b|\leq1$, then $(x,y)$ and $(a,b)$ must be different colors.

- If $(x,y)$ and $(a,b)$ are two lattice points such that $x\equiv a\pmod{k}$ and $y\equiv b\pmod{k}$, then $(x,y)$ and $(a,b)$ must be the same color.
