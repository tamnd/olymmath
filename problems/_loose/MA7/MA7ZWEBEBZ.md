---
tag: MA7ZWEBEBZ
kind: problem
type: answer
answer: "3456"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=118639
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
An ant walks from the bottom left corner of a $10 \times 10$ square grid to the diagonally-opposite corner, always walking along grid lines and taking as short a route as possible. Let $N(k)$ be the number of different paths that ant could follow if it makes exactly $k$ turns. Find $N(6)-N(5)$.
