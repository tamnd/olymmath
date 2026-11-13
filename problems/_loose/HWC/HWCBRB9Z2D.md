---
tag: HWCBRB9Z2D
kind: problem
type: answer
answer: \frac{1}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78227
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1}, a_{2}, a_{3}, \ldots$ be a sequence of numbers such that $a_{1}=2$, $a_{2}=3$, and $a_{n}=\frac{a_{n-1}}{a_{n-2}}$ for all integers $n \geqslant 3$. For example, $a_{3}=\frac{a_{2}}{a_{1}}=\frac{3}{2}$.

Determine the value of $a_{2014}$.
