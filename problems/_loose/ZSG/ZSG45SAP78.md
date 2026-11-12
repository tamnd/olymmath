---
tag: ZSG45SAP78
kind: problem
type: answer
answer: C_{n+1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33437
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We consider non-decreasing paths on the integer lattice $\mathbb{Z}_{+}^{2}=\{(i, j): i, j=0,1,2, \ldots\}$, which start from the point $(0,0)$ and end at the point $(n, n)$, while remaining below the "diagonal" or touching it (i.e., paths passing through points in the set $\left\{(i, j) \in \mathbb{Z}_{+}^{2}, 0 \leqslant j \leqslant i \leqslant n\right\}$).

Show that the number of such paths is $C_{n+1}$, where

$$
C_{n}=\frac{1}{n} C_{2(n-1)}^{n-1}, n \geqslant 1
$$

- the Catalan numbers. (Sometimes the Catalan numbers are understood to be the numbers $\left.c_{n}=C_{n+1}, n \geqslant 0.\right)$
