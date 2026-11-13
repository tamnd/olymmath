---
tag: 7P5NAQ1YFM
kind: problem
type: answer
answer: n(n+1)\cdot2^{n-2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=121412
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the set $M=\{1,2,3, \cdots, n\}, n \in \mathbf{N}_{+},$ the sum of the sums of the elements of all subsets of $M$ is (the sum of the elements of the empty set $\varnothing$ is defined to be 0).
