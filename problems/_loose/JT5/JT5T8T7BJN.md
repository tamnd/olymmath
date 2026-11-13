---
tag: JT5T8T7BJN
kind: problem
type: answer
answer: \frac{1}{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=134185
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The twelfth question: Given a positive integer $n \geq 2$, find the smallest positive real number $c$ such that for any positive real numbers $x_{1}, x_{2}, \ldots, x_{n}$, the following inequality always holds: $\frac{1}{n}\left(\sum_{i=1}^{n} x_{i}\right)-\sqrt[n]{\prod_{i=1}^{n} x_{i}} \leq c \cdot \sum_{1 \leq i<j \leq n}\left(\sqrt{x_{i}}-\sqrt{x_{j}}\right)^{2}$.
