---
tag: XRJCBWXV5A
kind: problem
type: answer
answer: \{(5,12),(6,8)\}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233497
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a rectangular tiled room with dimensions $m\times n$, where the tiles are $1\times1$ in size. Compute all ordered pairs $(m,n)$ with $m\leq n$ such that the number of tiles on the perimeter is equal to the number of tiles in the interior (i.e. not on the perimeter).
