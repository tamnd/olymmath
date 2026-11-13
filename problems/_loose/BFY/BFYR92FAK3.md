---
tag: BFYR92FAK3
kind: problem
type: answer
answer: (σ(n) + τ(n) - n - 1) / 2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0001.parquet#row=338
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2025
    source: hf-mathnet
    label: China China-TST-2025A
---
Given an odd integer $n \ge 3$ and a regular $n$-gon with vertex set $V$, let $\mathcal{P}$ denote the set of all regular polygons with vertices in $V$. For example, if $n = 15$, then $\mathcal{P}$ includes 1 regular 15-gon, 3 regular pentagons, and 5 equilateral triangles.

Two players, Alice and Bob, play the following game. Initially, all points in $V$ are uncolored. Alice moves first, and they take turns coloring an uncolored point in $V$: Alice colors red, and Bob colors blue. The game ends when all points are colored. A polygon in $\mathcal{P}$ is called **red-dominated** if it has more red vertices than blue ones.

Find the largest integer $k$ such that, no matter how Bob plays, Alice can guarantee at least $k$ red-dominated polygons in $\mathcal{P}$ at the end.
