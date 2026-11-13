---
tag: QYZZG94P9V
kind: problem
type: answer
answer: 2^{n}+2n-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=92520
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the sequence $\left\{a_{n}\right\}$ have the sum of the first $n$ terms $S_{n}=2 a_{n}-1(n=1,2, \cdots)$, and the sequence $\left\{b_{n}\right\}$ satisfies $b_{1}=3, b_{k+1}=a_{k}+b_{k}$ $(k=1,2,3, \cdots)$, find the sum of the first $n$ terms of the sequence $\left\{b_{n}\right\}$.
