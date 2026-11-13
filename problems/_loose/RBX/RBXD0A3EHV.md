---
tag: RBXD0A3EHV
kind: problem
type: answer
answer: \frac{4}{3}(2^{n}-1)(2^{n+1}-1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=134888
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $a_{k}=2^{k}, k=1,2, \cdots, n$. Find the sum of all possible products $a_{i} a_{j}(1 \leqslant$ $i \leqslant j \leqslant n)$.
