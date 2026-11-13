---
tag: MSRMJDF9V9
kind: problem
type: answer
answer: (1,2),(2,1),(-1,-2),(-2,-1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85609
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all pairs of integers $(x, y)$ for which there exists a prime number $p$ and an integer $a$ such that $x^{2}+y^{2}=p$ and $(x+y)^{2}-a^{2}=p$.
