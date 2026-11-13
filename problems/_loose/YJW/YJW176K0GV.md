---
tag: YJW176K0GV
kind: problem
type: answer
answer: n^2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=168422
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $k(a)$ denote the number of points $(x, y)$ in the plane coordinate system for which $1 \leqq x \leqq a$ and $1 \leqq y \leqq a$ are relatively prime integers. Determine the following sum:

$$
\sum_{i=1}^{100} k\left(\frac{100}{i}\right)
$$
