---
tag: N0X4WWBQP7
kind: problem
type: answer
answer: "82"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261721
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each positive integer $n$, define $$g(n) = \gcd\left\{0! n!, 1! (n-1)!, 2 (n-2)!, \ldots, k!(n-k)!, \ldots, n! 0!\right\}.$$ Find the sum of all $n \leq 25$ for which $g(n) = g(n+1)$.
