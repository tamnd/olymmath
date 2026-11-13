---
tag: 1SBKMY26FD
kind: problem
type: answer
answer: "n"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=126316
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \geq 2$ be a positive integer, and let real numbers $a_{1}, a_{2}, \ldots, a_{n}, b_{1}, b_{2}, \ldots, b_{n}$ satisfy: $\sum_{i=1}^{n} a_{i}=\sum_{i=1}^{n} b_{i}=1$. Find the smallest real number $\lambda$ such that $\lambda \cdot \Sigma_{1 \leq i<j \leq n}\left(a_{i} b_{j}-a_{j} b_{i}\right)^{2} \geq \sum_{i=1}^{n}\left(a_{i}-b_{i}\right)^{2}$ always holds.
