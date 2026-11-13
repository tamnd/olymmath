---
tag: 8KEPG0J9RB
kind: problem
type: answer
answer: \text{No, there is no such } N.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231826
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ be the *potentioral* function, from positive integers to positive integers, defined by $p(1) = 1$ and $p(n + 1) = p(n)$, if $n + 1$ is not a perfect power and $p(n + 1) = (n + 1) \cdot p(n)$, otherwise. Is there a positive integer $N$ such that, for all $n > N,$ $p(n) > 2^n$?
