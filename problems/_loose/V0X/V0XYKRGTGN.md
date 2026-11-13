---
tag: V0XYKRGTGN
kind: problem
type: answer
answer: \frac{3}{20}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=110613
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{k}$ be the largest odd divisor of the positive integer $k$, and let $S_{n}=\sum_{i=1}^{2^{n}} a_{i}$. Prove: $\sum_{i=1}^{n} \frac{1}{S_{i} S_{i+1}}<\frac{3}{20}$.
