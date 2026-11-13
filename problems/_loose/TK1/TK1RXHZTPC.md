---
tag: TK1RXHZTPC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=127522
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the infinite sequence $\left\{a_{n}\right\}$ satisfies $a_{1}=1, a_{2}=1, a_{3}=3, a_{n}=a_{n-1}+2 a_{n-2}+a_{n-3}, n=$ $4,5, \cdots$. Prove that for any positive integer $m$, there exists a positive integer $n$ such that $m \mid a_{n}$.
