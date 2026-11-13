---
tag: AY42J7HKBC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=111437
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $n$, if an $m \times k$ grid table satisfies the following conditions, it is called an "$n$-grid table":
(1) Each cell of the grid table is colored either white or red, and there are exactly $n$ red cells;
(2) If the numbers $1, 2, \cdots, m k$ are filled into the grid table from the top-left cell to the bottom-right cell in the order from left to right and then from top to bottom, there are no $k$ consecutive numbers all in white cells;
(3) If the numbers $1, 2, \cdots, m k$ are filled into the grid table from the bottom-left cell to the top-right cell in the order from bottom to top and then from left to right, there are no $m$ consecutive numbers all in white cells.
Find the number of $n$-grid tables $f(n)$.
