---
tag: 9W81MXDX7P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89007
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a board, some integers are written. In each step, we select numbers $a$ and $b$ that are on the board, erase them, and instead write the numbers $3a - b$ and $13a - 3b$.

If initially on the board are the numbers $1, 2, 3, 4, \ldots, 2011, 2012$, can the numbers on the board after a finite number of steps be $2, 4, 6, 8, \ldots, 4022, 4024$?
