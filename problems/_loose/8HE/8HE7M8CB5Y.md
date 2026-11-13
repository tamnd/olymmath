---
tag: 8HE7M8CB5Y
kind: problem
type: answer
answer: "93"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=181690
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For every natural number $n$ with 3 decimal digits (so the first digit is not zero), we consider the number $n_{0}$ obtained from $n$ by removing its digits that are equal to zero. For example, if $n=205$ then $n_{0}=25$.

Determine the number of integers $n$ with three digits for which $n_{0}$ is a divisor of $n$ different from $n$.
