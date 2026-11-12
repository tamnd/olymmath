---
tag: VMBKEAGM73
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=38409
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that a polynomial $P(x)$ of degree $n$ cannot have more than $n$ distinct roots.

- A number $a$ is called a root of multiplicity $k$ ( $k \geqslant 1$ ) of the polynomial $P(x)$, if $P(x)$ is divisible by $(x-a)^{k}$ and is not divisible by $(x-a)^{k+1}$.
