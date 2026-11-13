---
tag: 59ZAH3MDJ3
kind: problem
type: answer
answer: f(n)=0
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=190340
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f: \mathbb{Z}^{+} \cup\{0\} \rightarrow \mathbb{R}$ such that

$$
f(n+m)+f(n-m)=f(3 n), \forall n, m \in \mathbb{Z}^{+} \cup\{0\}, n \geq m
$$
