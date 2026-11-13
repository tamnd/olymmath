---
tag: QTET2SVDX5
kind: problem
type: answer
answer: n^2-n-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89743
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \geqslant 3$ be a natural number. For a natural number $m \geqslant n+1$, we say that $m$ is $n$-colorable if it is possible to color $m$ stones placed on a circle using $n$ colors such that among any $n+1$ consecutive stones, all $n$ colors appear.

Prove that there are finitely many natural numbers $m \geqslant n+1$ that are not $n$-colorable and determine the largest of them.
