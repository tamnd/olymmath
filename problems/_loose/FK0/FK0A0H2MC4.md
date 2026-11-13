---
tag: FK0A0H2MC4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=132106
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $k \geq l \geq 1$ be integers. Find the smallest integer $n=n(k, l)$, with the property:
For any simple graph $G$ with at least $n$ vertices, then either $G$ contains a path of length $k$, or the complement graph $\bar{G}$ contains a path of length $l$. (A path of length $t$ in a graph means there exist $t+1$ distinct vertices $x_{1}, \ldots, x_{t+1}$, such that $x_{i}$ is adjacent to $x_{i+1}$, $1 \leq i \leq t$; the complement graph $\bar{G}$ is defined as: it has the same vertex set as $G$, and two vertices are adjacent if and only if they are not adjacent in $G$)
