---
tag: GH1QTH4DEY
kind: problem
type: answer
answer: "393"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=191195
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A positive integer $n$ with $n \geq 3$ is called a Nella number if there exists a positive integer $x$ with $x<n$ and there exists a positive integer $m$ such that

- $m$ is not divisible by $x$ or by $x+1$, and
- $m$ is divisible by every other positive integer between 1 and $n$ inclusive.

For example, $n=7$ is a Nella number. How many Nella numbers $n$ are there with $50 \leq n \leq 2017$ ?
(A) 393
(B) 394
(C) 395
(D) 396
(E) 397
