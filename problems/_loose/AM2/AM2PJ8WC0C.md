---
tag: AM2PJ8WC0C
kind: problem
type: answer
answer: 1,2,3,4,9
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=86266
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all natural numbers $n$ for which there exists some natural number $m$ with the following properties:

- $m$ has at least two digits (in base 10), all are distinct and none is 0.
- $m$ is a multiple of $n$ and any rearrangement of its digits results in a multiple of $n$.
