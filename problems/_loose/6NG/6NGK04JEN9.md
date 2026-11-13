---
tag: 6NGK04JEN9
kind: problem
type: answer
answer: a_{n}=\frac{n}{3^{2^{n-1}}-2}(n\in{N}^{*})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=124351
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $\left\{a_{n}\right\}$ satisfies: $a_{1}=1, a_{n+1}$ $=\frac{(n+1) a_{n}^{2}}{2 a_{n}^{2}+4 n a_{n}+n^{2}}$, find the general term of $\left\{a_{n}\right\}$.
