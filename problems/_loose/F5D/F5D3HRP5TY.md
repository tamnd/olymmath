---
tag: F5D3HRP5TY
kind: problem
type: answer
answer: "102"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=160209
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1}, a_{2}, \ldots$ be a sequence satisfying the condition that $a_{1}=1$ and $a_{n}=10 a_{n-1}-1$ for all $n \geq 2$. Find the minimum $n$ such that $a_{n}>10^{100}$.
