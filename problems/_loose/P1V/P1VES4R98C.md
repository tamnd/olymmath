---
tag: P1VES4R98C
kind: problem
type: answer
answer: \frac{n-1}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=114874
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be an odd number $(n>1)$. The $n$ roots of the equation $z^{n}=1$ are $1, x_{1}, x_{2}, \cdots, x_{n-1}$. Find the value of the expression $\sum_{i=1}^{n-1} \frac{1}{1+x_{i}}$.
