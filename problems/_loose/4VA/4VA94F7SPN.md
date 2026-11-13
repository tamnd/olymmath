---
tag: 4VA94F7SPN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78122
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_{1}, \ldots, x_{n}$ and $y_{1}, \ldots, y_{n}$ be two lists of real numbers such that $\min _{1 \leqslant i \leqslant n} x_{i} \geqslant \max _{1 \leqslant i \leqslant n} y_{i}$. We then define $P=\max _{1 \leqslant i \leqslant n}\left(x_{i}-y_{i}\right)$ and $G=\max _{1 \leqslant i \leqslant n} x_{i}-\min _{1 \leqslant i \leqslant n} y_{i}$. Prove that $P \leqslant G \leqslant 2 P$.

Given real numbers $a_{1}, a_{2}, \ldots, a_{n}$, the number $\min _{1 \leqslant i \leqslant n} a_{i}$ denotes the smallest real number among the numbers $a_{1}, a_{2}, \ldots, a_{n}$. The number $\max _{1 \leqslant i \leqslant n} a_{i}$ denotes the largest real number among the numbers $a_{1}, a_{2}, \ldots, a_{n}$.
