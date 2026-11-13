---
tag: 5SWJPCR24Y
kind: problem
type: answer
answer: \sum_{i=0}^{3}C_{n}^{i}\cdotC_{k-1}^{n-i-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=144864
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Place $k$ indistinguishable balls into $n$ different boxes, $4 \leqslant n \leqslant k$, with at most 3 empty boxes. How many ways are there to do this?
