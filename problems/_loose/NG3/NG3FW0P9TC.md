---
tag: NG3FW0P9TC
kind: problem
type: answer
answer: D_n = \frac{2019\sqrt{3}}{2^n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246814
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Starting from a pyramid $T_0$ whose edges are all of length $2019$, we construct the Figure $T_1$ when considering the triangles formed by the midpoints of the edges of each face of $T_0$, building in each of these new pyramid triangles with faces identical to base. Then the bases of these new pyramids are removed. Figure $T_2$ is constructed by applying the same process from $T_1$ on each triangular face resulting from $T_1$, and so on for $T_3, T_4, ...$

Let $D_0= \max \{d(x,y)\}$, where $x$ and $y$ are vertices of $T_0$ and $d(x,y)$ is the distance between $x$ and $y$. Then we define $D_{n + 1} = \max \{d (x, y) |d (x, y) \notin \{D_0, D_1,...,D_n\}$, where $x, y$ are vertices of $T_{n+1}$.

Find the value of $D_n$ for all $n$.
