---
tag: QQJNTS4EZX
kind: problem
type: answer
answer: \frac{n^2}{n - 1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247097
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For real numbers $ x_{i}>1,1\leq i\leq n,n\geq 2,$ such that:

$ \frac{x_{i}^2}{x_{i}-1}\geq S= \sum^n_{j=1}x_{j},$ for all $ i=1,2\dots, n$

find, with proof, $ \sup S.$
