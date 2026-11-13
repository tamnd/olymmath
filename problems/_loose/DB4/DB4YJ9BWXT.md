---
tag: DB4YJ9BWXT
kind: problem
type: answer
answer: a_{n}=2^{2-(\frac{1}{2})^{n-2}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=118529
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
4 * Find the general term of the sequence $a_{1}=1, a_{2}=2, \frac{a_{n}}{a_{n-1}}=\sqrt{\frac{a_{n-1}}{a_{n-2}}}(n \geqslant 3)$.
