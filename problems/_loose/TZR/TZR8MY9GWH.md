---
tag: TZR8MY9GWH
kind: problem
type: answer
answer: n = 1280
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253628
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $2561$ given points on a circle be colored either red or green. In each step, all points are recolored simultaneously in the following way: if both direct neighbors of a point $P$ have the same color as $P$, then the color of $P$ remains unchanged, otherwise $P$ obtains the other color. Starting with the initial coloring $F_1$, we obtain the colorings $F_2, F_3,\dots$ after several recoloring steps. Determine the smallest number $n$ such that, for any initial coloring $F_1$, we must have $F_n = F_{n+2}$.
