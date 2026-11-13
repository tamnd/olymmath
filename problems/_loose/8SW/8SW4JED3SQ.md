---
tag: 8SW4JED3SQ
kind: problem
type: answer
answer: "9999"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=147787
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $k$, let $||k||$ denote the absolute difference between $k$ and the nearest perfect square. For example, $||13||=3$ since the nearest perfect square to $13$ is $16$. Compute the smallest positive integer $n$ such that $\frac{||1|| + ||2|| + ...+ ||n||}{n}=100$.
