---
tag: D0QX0PNE9S
kind: problem
type: answer
answer: (n-1)!
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=118128
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let integer $n \geqslant 3, a_{1}, a_{2}, \cdots, a_{n}$ be any $n$ distinct real numbers with a positive sum; $b_{1}, b_{2}, \cdots, b_{n}$ is a permutation of these $n$ numbers. If for $k=1,2, \cdots, n$, we have $\sum_{i=1}^{k} b_{i}>0$, then $b_{1}, b_{2}, \cdots, b_{n}$ is called a "good permutation". Find the minimum number of good permutations.
