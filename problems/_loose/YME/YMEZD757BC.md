---
tag: YMEZD757BC
kind: problem
type: answer
answer: "2008"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=112717
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}(n \geqslant 0)$ satisfies $a_{0}=0, a_{1}=1$, for all positive integers $n$, there is $a_{n+1}=2 a_{n}+$ $2007 a_{n-1}$, find the smallest positive integer $n$ such that $2008 \mid a_{n}$.
