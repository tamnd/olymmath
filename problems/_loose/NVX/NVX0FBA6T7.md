---
tag: NVX0FBA6T7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245890
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ and $k$ be given relatively prime natural numbers, $k<n.$ Each number in the set $M=\{1,2,...,n-1\}$ is colored either blue or white. It is given that

- for each $i\in M,$ both $i$ and $n-i$ have the same color,
- for each $i\in M,i\ne k,$ both $i$ and $\left \vert i-k \right \vert $ have the same color.
Prove that all numbers in $M$ have the same color.
