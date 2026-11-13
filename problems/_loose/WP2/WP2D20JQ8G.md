---
tag: WP2D20JQ8G
kind: problem
type: answer
answer: 2^{n}M\leqN^{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80662
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Germany 2006) Consider a grid consisting of $m \times n$ cells, each of which can be colored either white or black. Two cells are said to be adjacent if they share a side. A path is a sequence of adjacent cells where the first cell is on the left edge of the rectangle and the last cell is on the right edge. Two paths are said to intersect if they have a cell in common.

Let $N$ be the number of ways to color the grid such that there is a path made of black cells, and $M$ be the number of ways to color the grid such that there are two non-intersecting paths made of black cells. Show that

$$
N^{2} \geq 2^{m n} M
$$
