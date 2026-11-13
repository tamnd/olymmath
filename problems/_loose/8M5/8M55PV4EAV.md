---
tag: 8M55PV4EAV
kind: problem
type: answer
answer: \frac{2000}{3999}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=102053
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_{1}, x_{2}, \cdots, x_{2000}$ be 2000 real numbers, satisfying $x_{i} \in[0,1](i=1,2, \cdots, 2000)$, define $F_{i}=\frac{x_{i}^{2000}}{\sum_{j=1}^{2000} x_{j}^{30999}-i x_{i}^{3309}+2000}$, find the maximum value of $\sum_{i=1}^{2000} F_{i}$, and prove your conclusion.
