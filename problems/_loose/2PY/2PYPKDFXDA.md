---
tag: 2PYPKDFXDA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=24660
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that if each of the numbers in $p$-arithmetic is raised to the same power $k$ and all the results are added, the sum will be 0 or -1.
1) The number $p$ should be chosen so that it does not divide any of the denominators. Otherwise, we would arrive at a $p$-arithmetic equation containing division by zero.
2) $n!$ is a shorthand for the product $1 \cdot 2 \cdot 3 \cdot 4 \ldots n$ of all integers from 1 to $n$, so $(p-1)!=1 \cdot 2 \cdot 3 \cdot \ldots \cdot (p-1)$.
