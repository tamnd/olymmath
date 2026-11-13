---
tag: 3VHV1JFRR6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75162
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
By "step" we mean the replacement of an ordered triple of integers $(p, q, r)$ with the triple $(r+5 q, 3 r-5 p, 2 q-3 p)$. Determine whether there exists an integer $k$ such that the triple $(1,3,7)$ becomes the triple $(k, k+1, k+2)$ after a finite number of steps.
