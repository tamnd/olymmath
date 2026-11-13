---
tag: SVHBGE4VGH
kind: problem
type: answer
answer: \binom{+n}{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81186
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a large rectangle of size $m$ by $n$, cut into small squares of side 1.

How many ways are there to go from the bottom left corner to the top right corner, moving only on the grid, and only upwards or to the right?
