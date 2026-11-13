---
tag: J5VRTW2ANX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206041
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ m$ and $ n$ be two nonzero natural numbers. In every cell $ 1 \times 1$ of the rectangular table $ 2m \times 2n$ are put signs $ +$ or $ -$. We call *cross* an union of all cells which are situated in a line and in a column of the table. Cell, which is situated at the intersection of these line and column is called *center of the cross*. A transformation is defined in the following way: firstly we mark all points with the sign $ -$. Then consecutively, for every marked cell we change the signs in the cross, whose center is the choosen cell. We call a table *accesible* if it can be obtained from another table after one transformation.
Find the number of all *accesible* tables.
