---
tag: WVF8FNXECJ
kind: problem
type: answer
answer: (,n)=\sum_{k=1}^{n}(-1)^{n-k}\binom{n}{k}k^{}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=125077
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $g(m, n)$ denote the number of different ways to distribute $m$ distinct items to $n (m \geqslant n)$ people such that each person receives at least one item. Find the counting formula for $g(m, n)$.
