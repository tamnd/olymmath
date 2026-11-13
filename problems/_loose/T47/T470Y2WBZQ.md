---
tag: T470Y2WBZQ
kind: problem
type: answer
answer: 0 \leq a_n - a_{n+1} < \frac{2}{n^2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244295
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $(a_n)_{n\in\mathbb{N}}$ be a sequence of positive numbers such that $$a_n-2a_{n+1}+a_{n+2}\geq 0 \text{ and } \sum_{j=1}^{n} a_j \leq 1, \forall n\in\mathbb{N}.$$ Prove that $0\leq a_{n}-a_{n+1}<\frac{2}{n^2}, \forall n\in\mathbb{N}.$
