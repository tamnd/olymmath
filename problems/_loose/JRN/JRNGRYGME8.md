---
tag: JRNGRYGME8
kind: problem
type: answer
answer: "0"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207961
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Throw $ n$ balls in to $ 2n$ boxes.　Suppose each ball comes into each box with equal probability of entering in any boxes.
Let $ p_n$ be the probability such that any box has ball less than or equal to one. Find the limit $ \lim_{n\to\infty} \frac{\ln p_n}{n}$
