---
tag: 80K0QCXHVB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=139302
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1}, a_{2}, \cdots, a_{n}$ be positive real numbers, and $a_{1}+a_{2}+\cdots+a_{n}=n$.
Prove: $\sum_{m=1}^{n} \frac{a_{m}}{\prod_{k=1}^{m}\left(1+a_{k}\right)} \leqslant 1-\frac{1}{2^{n}}$.
