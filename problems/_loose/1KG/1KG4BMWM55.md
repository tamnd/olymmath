---
tag: 1KG4BMWM55
kind: problem
type: answer
answer: n<15
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83545
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We have $n$ points in space $P_{1}, \ldots, P_{n}$ such that there exists a point $P$ such that $P_{i} P < P_{i} P_{j}$ for all $j \neq i$. Show that $n < 15$.
