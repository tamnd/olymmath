---
tag: SKFXK68V31
kind: problem
type: answer
answer: 2^{\alpha}(\alpha\geqslant0,\alpha\in{Z})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=100749
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
16 The sequences of sets $\left\{A_{n}\right\},\left\{B_{n}\right\}$ are defined as follows: $A_{1}=\varnothing, B_{1}=\{0\}, A_{n+1}$ $=\left\{x+1 \mid x \in B_{n}\right\}, B_{n+1}=\left(A_{n} \cup B_{n}\right) \backslash\left(A_{n} \cap B_{n}\right)$.
Find all positive integers $n$, such that $B_{n}=\{0\}$.
