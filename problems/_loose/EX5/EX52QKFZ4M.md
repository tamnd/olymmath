---
tag: EX52QKFZ4M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246226
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any positive integer $n$, we define
$$S_n=\sum_{k=1}^n \frac{2^k}{k^2}.$$
Prove that there are no polynomials $P,Q$ with real coefficients such that for any positive integer $n$, we have $\frac{S_{n+1}}{S_n}=\frac{P(n)}{Q(n)}$.
