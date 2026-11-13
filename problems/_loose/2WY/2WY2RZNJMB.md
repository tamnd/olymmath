---
tag: 2WY2RZNJMB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254717
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \ge 3$ be an odd integer. Each cell is a $n \times n$ board painted in yellow or blue. Let's call the sequence of cells $S_1, S_2,...,S_m$ *path * if they are all the same color and the cells $S_i$ and $S_j$ have one in common an edge if and only if $|i - j| = 1$. Suppose that all yellow cells form a path and all the blue cells form a path. Prove that one of the two paths begins or ends at the center of the board.
