---
tag: CXAEPXFCQ6
kind: problem
type: answer
answer: \alpha=\frac{\pi}{2^{2018}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93427
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define the sequence $\left\{x_{n}\right\}$:
$$
x_{1}=a, x_{n+1}=\frac{x_{n}^{2}-1}{2 x_{n}}\left(n \in \mathbf{Z}_{+}\right) \text {. }
$$

Prove: There exists a number $a$, such that the sequence $\left\{x_{n}\right\}$ has exactly 2018 distinct terms (if a term of the sequence is 0, the sequence stops at this term).
