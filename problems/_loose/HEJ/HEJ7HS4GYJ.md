---
tag: HEJ7HS4GYJ
kind: problem
type: answer
answer: \frac{3}{2}(+b)-6
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161582
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a$ and $b$ be odd natural numbers greater than 1. Consider an $a \times b$ table with the cells $(2,1),(a-2, b)$ and $(a, b)$ missing (by cell $(i, j)$ we mean the cell at the intersection of row $i$ and column $j$). Assume that such a table is tiled using $2 \times 1$ dominoes and $2 \times 2$ squares (dominoes can be rotated).

Prove that at least $\frac{3}{2}(a+b)-6$ dominoes have been used. (Nikola Petrović)
