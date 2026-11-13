---
tag: Y8GQWAHAQ4
kind: problem
type: answer
answer: a_{n}=2^{n+2}-2n-4
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=130711
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$ satisfies: $a_{1}=2, a_{n}=2\left(n+a_{n-1}\right), n=2,3, \cdots$, find the general term formula of the sequence $\left\{a_{n}\right\}$.
