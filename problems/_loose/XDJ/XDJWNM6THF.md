---
tag: XDJWNM6THF
kind: problem
type: answer
answer: \frac{(n-1)(n-2)(n-3)(3n + 8)}{24}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205825
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the following array:
$$ 3, 5\\3, 8, 5\\3, 11, 13, 5\\3, 14, 24, 18, 5\\3, 17, 38, 42, 23, 5\\ \ldots
$$ Find the 5-th number on the $ n$-th row with $ n>5$.
