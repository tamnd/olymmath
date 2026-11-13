---
tag: EDCW4ZGBWQ
kind: problem
type: answer
answer: x_{k+1}=x_{k+2}=\cdots=x_{n}=\sqrt{\frac{A}{B}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=117336
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given positive integers $n, k (n > k)$, and $x_{1}, x_{2}, \cdots, x_{k} > 0$. Find $x_{k+1}, x_{k+2}, \cdots, x_{n} > 0$, such that $\sum_{1 \leqslant i, j \leq n} \frac{x_{i}}{x_{j}}$ is minimized.
