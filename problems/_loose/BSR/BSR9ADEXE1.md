---
tag: BSR9ADEXE1
kind: problem
type: answer
answer: a_{n}=\frac{1}{\sqrt{5}}[(\frac{1+\sqrt{5}}{2})^{n+1}-(\frac{1-\sqrt{5}}{2})^{n+1}]
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=110120
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the general term formula of the Fibonacci sequence $a_{0}=1, a_{1}=1, a_{n+2}=a_{n+1}+a_{n}(n \geqslant 1)$.
