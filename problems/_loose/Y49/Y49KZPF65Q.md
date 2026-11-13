---
tag: Y49KZPF65Q
kind: problem
type: answer
answer: f(x) = cx^d
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220633
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all integer coefficient polynomials $Q$ such that

- $Q(n)\ge 1$ $\forall n\in \mathbb{Z}_+$.

- $Q(mn)$ and $Q(m)Q(n)$ have the same number of prime divisors $\forall m,n\in\mathbb{Z}_+$.
