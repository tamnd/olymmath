---
tag: 8XQBRP1Y90
kind: problem
type: answer
answer: 2^{N-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89792
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $N$ be a natural number. We call a staircase a part of a square plate of dimensions $N \times N$ that consists of the first $K$ fields in the $K$-th row for $K=1,2, \ldots, N$. In how many ways can the staircase be cut into rectangles of different areas that consist of the fields of the given plate?
