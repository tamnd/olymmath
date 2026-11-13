---
tag: 1KF7VQ4TET
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=126829
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The seventy-first question: Steve has piled $m\left(m \in \mathbb{Z}^{+}\right)$ identical stones in an $n \times n$ grid, where each cell of the grid can hold any number of stones. After Steve finishes piling the stones in a certain way, he begins to move the stones according to the following method:

Select any four corner cells of a rectangle in the grid, with the positions of the selected cells being $(a, c), (a, d), (b, c), (b, d)$, where $1 \leq a < b \leq n, 1 \leq c < d \leq n$. Each move involves taking one stone from each of the cells $(a, c), (b, d)$ and placing them into the cells $(a, d), (b, c)$, or taking one stone from each of the cells $(a, d), (b, c)$ and placing them into the cells $(a, c), (b, d)$.

If two ways of piling stones can be converted into each other through the above moves, then these two ways of piling stones are considered equivalent. How many non-equivalent ways are there for Steve to pile the stones?
