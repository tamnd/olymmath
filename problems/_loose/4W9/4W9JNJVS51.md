---
tag: 4W9JNJVS51
kind: problem
type: answer
answer: \binom{n-1}{k-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240122
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ n$ and $ k$ be positive integers. Please, find an explicit formula for
$$ \sum y_1y_2 \dots y_k,$$
where the summation runs through all $ k-$tuples positive integers $ (y_1,y_2,\dots,y_k)$ satisfying $ y_1+y_2+\dots+y_k=n$.
