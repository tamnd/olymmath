---
tag: P7J4CF6VR4
kind: problem
type: answer
answer: "28"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=13695
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a $28 \times 35$ table, some $k$ cells are painted red, another $r-$ in pink, and the remaining $s-$ in blue. It is known that

- $k \geqslant r \geqslant s$
- each boundary cell has at least 2 neighbors of the same color;
- each non-boundary cell has at least 3 neighbors of the same color.

What is the smallest value that the quantity $k-s$ can take?

(A cell is called boundary if it is adjacent to the edge of the table. Neighbors are cells that share a common side.)
