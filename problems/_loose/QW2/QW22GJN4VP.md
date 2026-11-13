---
tag: QW22GJN4VP
kind: problem
type: answer
answer: \sqrt{n}+n-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=135436
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $n \geq 2, x_{1}, x_{2}, \ldots, x_{n}$ are non-negative real numbers satisfying $\sum_{i=1}^{n} x_{i}^{2}=1, M=\max \left\{x_{1}, x_{2}, \ldots, x_{n}\right\}$, and set $S=n M^{2}+2 \sum_{i<j} x_{i} x_{j}$. Try to find the maximum and minimum values of $S$.
