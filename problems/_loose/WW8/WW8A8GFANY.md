---
tag: WW8A8GFANY
kind: problem
type: answer
answer: \1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=20152
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a grid board of size $2 \times n$ cells, some cells are painted black. A coloring is called correct if there are no two adjacent cells among the painted ones. (Adjacent are cells that share a common side.) A coloring in which no cell is painted is also considered correct.

Let $A_{n}$ be the number of correct colorings with an even number of painted cells, and $B_{n}$ be the number of correct colorings with an odd number of painted cells. Find all possible values of $A_{n}-B_{n}$.
