---
tag: 7EXJ63HH0M
kind: problem
type: answer
answer: \frac{9 \cdot (11^{10} - 1)}{10}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207201
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each positive integer $ n$, define $ f(n)$ as the number of digits $ 0$ in its decimal representation. For example, $ f(2)=0$, $ f(2009)=2$, etc. Please, calculate $$ S=\sum_{k=1}^{n}2^{f(k)},$$ for $ n=9,999,999,999$.
*Yudi Satria, Jakarta*
