---
tag: 1MKXD10MFS
kind: problem
type: answer
answer: a_{n}=\frac{3\cdot4^{n+1}+2\cdot(-1)^{n+1}}{4^{n+1}+(-1)^{n}}(n\in{N}^{*})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=100950
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the sequence $\left\{a_{n}\right\}$ satisfy $a_{0}=2, a_{n}=\frac{2 a_{n-1}+6}{a_{n-1}+1}(n \geqslant 1)$, then $a_{n}=$
