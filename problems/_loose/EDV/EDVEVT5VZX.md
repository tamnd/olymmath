---
tag: EDVEVT5VZX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=123765
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $G$ be a connected graph. If for each vertex $V$, there corresponds a non-negative integer $f(V)$, and it satisfies:
(1) If vertices $V$ and $W$ are adjacent, then
$$
|f(V)-f(W)| \leqslant \mathrm{i},
$$
(2) If $f(V)>0$, then $V$ is adjacent to at least one vertex $W$ such that
$$
f(W)<f(V),
$$
(3) There is exactly one vertex $U$ such that
$$
f(U)=0 .
$$

Prove that $f(V)$ is the minimum number of edges in a chain connecting $U$ to $V$.
