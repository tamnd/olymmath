---
tag: 9XJQAADJBN
kind: problem
type: answer
answer: n = 7
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239528
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose $z_1, z_2 , \cdots z_n$ are $n$ complex numbers such that $min_{j \not= k} | z_{j} - z_{k} | \geq max_{1 \leq j \leq n} |z_j|$. Find the maximum possible value of $n$. Further characterise all such maximal configurations.
