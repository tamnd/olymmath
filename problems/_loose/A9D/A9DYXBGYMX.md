---
tag: A9DYXBGYMX
kind: problem
type: answer
answer: "9375000"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=146263
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $S=\{(i, j) \mid i, j=1,2, \cdots, 100\}$ as the set of $100 \times 100$ integer points on the Cartesian plane. Each point in $S$ is colored with one of four given colors. Find the maximum possible number of rectangles with sides parallel to the coordinate axes, whose vertices are four points of different colors in $S$.
