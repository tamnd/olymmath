---
tag: 9QYCN68P6B
kind: problem
type: answer
answer: P(n)=\1,P(n)=\(n-1),P(n)=\(n-1)^{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=84477
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all $P \in \mathbb{Z}[X]$, such that $P(n)$ divides $n^{n-1}-1$ for all $n \geqslant 2001$.
