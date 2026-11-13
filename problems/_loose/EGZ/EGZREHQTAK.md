---
tag: EGZREHQTAK
kind: problem
type: answer
answer: (n)=n(n-1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=103095
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_j$ be non-negative real numbers, try to find the optimal constant $c(n)$, such that $\sum_{j=1}^{n} \frac{a_{j}\left(s_{n}-x_{j}\right)}{x_{j}} \geqslant c(n)\left(\prod_{j=1}^{n} a_{j}\right)^{\frac{1}{n}}$.
