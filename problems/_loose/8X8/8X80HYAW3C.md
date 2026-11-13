---
tag: 8X80HYAW3C
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162204
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The $(n, k)$-knight figure moves by $n$ positions in one of two directions and by $k$ in the other (the usual knight is thus a $(2,1)$-knight). Given $n$ and $k$, determine the smallest number of colors needed to color an infinite checkerboard such that the $(n, k)$-knight always changes color with each move.
