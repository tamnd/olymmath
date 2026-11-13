---
tag: NPDV560B2B
kind: problem
type: answer
answer: \lfloor(n+2)^{2}/4\rfloor
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77697
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let G be an infinite directed graph, where every vertex has finite degree. We assume that, for each vertex $\mathrm{s}$, the in-degree of $s$ is strictly less than the out-degree of $s$. Let $v$ be a vertex of G. For any integer $n \geqslant 1$, we denote $V_{n}$ as the number of vertices that can be reached from $v$ by passing through at most $n$ edges, including $v$.

What is the smallest possible value of $V_{n}$?
