---
tag: XFXA59R89K
kind: problem
type: answer
answer: (1,2,\cdots,n)or(2,1,3,4,\cdots,n)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=99856
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all subsequences $\left\{a_{1}, a_{2}, \cdots, a_{n}\right\}$ of the sequence $\{1,2, \cdots, n\}$, such that for $1 \leqslant i \leqslant n$, the property $i+1 \mid 2\left(a_{1}+a_{2}+\cdots+a_{i}\right)$ holds.
