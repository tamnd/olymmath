---
tag: ZKC0FM1X5V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=54726
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a rectangular box with a base of $m \times n$, where $m$ and $n$ are odd numbers, dominoes of size $2 \times 1$ are placed such that only one $1 \times 1$ square (a hole) remains uncovered in the corner of the box. If a domino tile is adjacent to the hole by its short side, it is allowed to slide along itself by one cell, covering the hole (thus opening a new hole). Prove that using such moves, the hole can be moved to any other corner.
