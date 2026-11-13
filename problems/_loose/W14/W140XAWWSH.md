---
tag: W140XAWWSH
kind: problem
type: answer
answer: P(x) = 0
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217224
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all polynomials $P\in \mathbb{R}[x]$, for which $P(P(x))=\lfloor P^2 (x)\rfloor$ is true for $\forall x\in \mathbb{Z}$.
