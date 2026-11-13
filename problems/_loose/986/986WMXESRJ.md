---
tag: 986WMXESRJ
kind: problem
type: answer
answer: M' = \sqrt{M} \cdot \frac{1}{1 - \left(1+\frac{1}{M}\right)^{-\frac{1}{2}}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237589
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $(a_n)_{n\ge 1}$ be a sequence of positive numbers. If there is a constant $M > 0$ such that $a_2^2 + a_2^2 +\ldots + a_n^2 < Ma_{n+1}^2$ for all $n$, then prove that there is a constant $M ' > 0$ such that $a_1 + a_2 +\ldots + a_n < M ' a_{n+1}$ .
