---
tag: 6SJ2HQB8FY
kind: problem
type: answer
answer: A_{n}=\frac{1}{n+1}\mathrm{C}_{2n}^{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=94032
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Three. (50 points) On a line $l$, there are $n+1$ points numbered $1, 2, \cdots, n+1$ arranged from left to right. In the plane above $l$, connect these points with $n$ continuous curves, satisfying:
(1) Any curve connects only two different points, and at most one curve connects any two points;
(2) If point $i$ is connected to point $j$, then the connecting line is denoted as $l_{ij}$ $(i<j)$;
(3) If $i<m \leqslant j<n$, $l_{ij}$ and $l_{mn}$ cannot exist simultaneously, i.e., they cannot "cross" or "connect end-to-end".

Let the number of all different connection methods be denoted as $A_{n}(n \geqslant 0, n \in \mathbf{Z})$. Find the expression for $A_{n}$.
