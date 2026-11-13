---
tag: 639DFNM8CP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204624
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f: \mathbb{N} \to \mathbb{N}$ such that
$$m+f(n) \mid f(m)^2 - nf(n)$$
for all positive integers $m$ and $n$.
(Here, $f(m)^2$ denotes $\left(f(m)\right)^2$.)
