---
tag: TSRWKH45QH
kind: problem
type: answer
answer: '{1,2,3,5,7,13}'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77975
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all integers $n \geqslant 1$ such that for every prime $p < n, n - \left\lfloor\frac{n}{p}\right\rfloor p$ is not divisible by a square different from 1.
