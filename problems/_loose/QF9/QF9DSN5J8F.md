---
tag: QF9DSN5J8F
kind: problem
type: answer
answer: x_{n}=\sqrt{\frac{1}{2}(5^{2^{n-1}}-3)}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=96339
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $x_{1}=1, x_{n+1}=\sqrt{2 x_{n}^{4}+6 x_{n}^{2}+3}\left(n \geqslant 1, n \in \mathbf{N}^{*}\right)$, find $x_{n}$.
