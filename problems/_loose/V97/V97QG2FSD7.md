---
tag: V97QG2FSD7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248208
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ m,n\ge 2 $ and consider a rectangle formed by $ m\times n $ unit squares that are colored, either white, or either black. A *step* is the action of selecting from it a rectangle of dimensions $ 1\times k, $ where $ k $ is an odd number smaller or equal to $ n, $ or a rectangle of dimensions $ l\times 1, $ where $ l $ is and odd number smaller than $ m, $ and coloring all the unit squares of this chosen rectangle with the color that appears the least in it.

**a)** Show that, for any $ m,n\ge 5, $ there exists a succession of *steps* that make the rectagle to be single-colored.
**b)** What about $ m=n+1=5? $
