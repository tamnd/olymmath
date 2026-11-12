---
tag: X2QGYC2RGY
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=41705
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Calculation of the sum. Let $n$ be a fixed positive number. Set $x_{0}=\frac{1}{n}$ and $x_{j}=\frac{1}{n-1} \sum_{i=0}^{j-1} x_{i}$ for $j=$ $1,2, \ldots, n-1$. Compute the sum $\sum_{j=0}^{n-1} x_{j}$.
