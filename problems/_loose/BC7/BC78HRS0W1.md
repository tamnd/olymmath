---
tag: BC78HRS0W1
kind: problem
type: answer
answer: (n-1)^2-1whenn\geqslant4,
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=25613
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The cells of a square table of size $n \times n$ $(n \geqslant 3)$ are filled with numbers $\pm 1$ according to the following rules:
1) in all boundary cells of the table, the number -1 is placed;
2) the number placed in the next unfilled cell of the table - which can be chosen arbitrarily - is equal to the product of the nearest numbers to this cell, located on either side of it, in the same row or in the same column. This is done until all empty cells of the table are filled. a) What is the maximum, b) minimum number of +1 that can result in the table
