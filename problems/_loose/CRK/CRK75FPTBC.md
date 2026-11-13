---
tag: CRK75FPTBC
kind: problem
type: answer
answer: (n)=\frac{n-1}{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=118679
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The eleventh question: Given a positive integer $n \geq 2$, find the smallest real number $c(n)$ such that for any positive real numbers $a_{1}, a_{2}, \ldots, a_{n}$, the following inequality holds: $\frac{\sum_{i=1}^{n} a_{i}}{n}-\sqrt[n]{\prod_{i=1}^{n} a_{i}} \leq c(n) \cdot \max _{1 \leq i<j \leq n}\left\{\left(\sqrt{a_{i}}-\sqrt{a_{j}}\right)^{2}\right\}$.
