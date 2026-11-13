---
tag: 71GT8H2NYZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251296
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a natural number $n$, let $P(x)$ be the polynomial of $2n$-th degree such that:
$P(0) = 1$ and $P(k) = 2^{k-1}$ for $k = 1, 2, . . . , 2n$.
Prove that $2P(2n + 1) - P(2n + 2) = 1$.
