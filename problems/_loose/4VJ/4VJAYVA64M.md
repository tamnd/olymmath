---
tag: 4VJAYVA64M
kind: problem
type: answer
answer: "101"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154521
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each positive integer $n$, let $S_{n}$ be the sum of the infinite geometric series whose first term is $n$ and whose common ratio is $\frac{1}{n+1}$. Determine the least value of $n$ such that
$$
S_{1}+S_{2}+\cdots+S_{n}>5150
$$
