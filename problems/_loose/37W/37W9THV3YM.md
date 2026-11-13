---
tag: 37W9THV3YM
kind: problem
type: answer
answer: \sum_{i=1}^{n}|a_{i}|\leqslant\frac{9}{4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=106586
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \in \mathbf{Z}_{+}, a_{1}, a_{2}, \cdots, a_{n} \in \mathbf{C}$, and for any non-empty subset $I$ of the set $\{1,2, \cdots, n\}$, we have $\left|\prod_{j \in I}\left(1+a_{j}\right)-1\right| \leqslant \frac{1}{2}$.
Prove: $\left|a_{1}\right|+\left|a_{2}\right|+\cdots+\left|a_{n}\right| \leqslant \frac{9}{4}$.
