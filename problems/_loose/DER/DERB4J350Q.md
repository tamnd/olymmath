---
tag: DERB4J350Q
kind: problem
type: answer
answer: \frac{1}{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=144511
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Real numbers $a_{1}, a_{2}, \cdots, a_{n}$ are all greater than 0 ($n$ is a natural number not less than 4) and $a_{1}+a_{2}+\cdots+a_{n}=1$ holds.
Try to find the maximum value of $S=\sum_{k=1}^{n} \frac{a_{k}^{2}}{a_{k}+a_{k+1}+a_{k+2}} \left(a_{n+1}=a_{1}, a_{n+2}=a_{2}\right)$.
