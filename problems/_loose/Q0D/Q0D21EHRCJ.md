---
tag: Q0D21EHRCJ
kind: problem
type: answer
answer: a_{n}=\frac{(-5)^{n}+3\cdot2^{n+1}}{2^{n+1}-2\cdot(-5)^{n}}(n\in{N}^{*})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=125120
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(2005 Hope Cup Training Question) Given $a_{1}=\frac{1}{2}, a_{n-1}=\frac{a_{n}+3}{2 a_{n}-4}\left(n \geqslant 1, n \in \mathbf{N}^{*}\right)$, find the general formula for $a_{n}$.
