---
tag: 20WQGTZ2CR
kind: problem
type: answer
answer: 2^{n}\cdot(4^{(\frac{n}{2})}-3^{(\frac{n}{2})}-2^{\binom{n}{2}}+1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=189887
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
How many different binary relations exist in a set of $n$ elements that are neither symmetric nor antisymmetric?

(A binary relation is said to be antisymmetric if for any two distinct elements $a$ and $b$ for which $a$ is related to $b$, it holds that $b$ is not related to $a$.
