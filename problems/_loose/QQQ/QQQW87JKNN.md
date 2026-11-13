---
tag: QQQW87JKNN
kind: problem
type: answer
answer: \left\lfloor \frac{n}{2} \right\rfloor
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205121
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n>1$ be an integer. Given a simple graph $G$ on $n$ vertices $v_1, v_2, \dots, v_n$ we let $k(G)$ be the minimal value of $k$ for which there exist $n$ $k$-dimensional rectangular boxes $R_1, R_2, \dots, R_n$ in a $k$-dimensional coordinate system with edges parallel to the axes, so that for each $1\leq i<j\leq n$, $R_i$ and $R_j$ intersect if and only if there is an edge between $v_i$ and $v_j$ in $G$.

Define $M$ to be the maximal value of $k(G)$ over all graphs on $n$ vertices. Calculate $M$ as a function of $n$.
