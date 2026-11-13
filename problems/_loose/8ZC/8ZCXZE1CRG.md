---
tag: 8ZCXZE1CRG
kind: problem
type: answer
answer: 1,000,000,000
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90161
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1}, a_{2}, \ldots, a_{2000}$ be real numbers in the interval $[0,1]$. Find the maximum possible value of

$$
\sum_{1 \leq i<j \leq 2000}(j-i)\left|a_{j}-a_{i}\right|
$$
