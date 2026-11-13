---
tag: BBNT37SA0G
kind: problem
type: answer
answer: n = 2^3 \cdot 3 \cdot 5 \cdot 17
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245523
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer with $k\ge22$ divisors $1=d_{1}< d_{2}< \cdots < d_{k}=n$, all different. Determine all $n$ such that $${d_{7}}^{2}+{d_{10}}^{2}= \left( \frac{n}{d_{22}}\right)^{2}.$$
