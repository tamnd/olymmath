---
tag: EFCYCBJ9YH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242994
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Every cell of a $20 \times 20$ table has to be coloured black or white (there are $2^{400}$ such colourings in total). Given any colouring $P$, we consider division of the table into rectangles with sides in the grid lines where no rectangle contains more than two black cells and where the number of rectangles containing at most one black cell is the least possible. We denote this smallest possible number of rectangles containing at most one black cell by $f(P)$. Determine the maximum value of $f(P)$ as $P$ ranges over all colourings.
