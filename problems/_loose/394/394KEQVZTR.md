---
tag: 394KEQVZTR
kind: problem
type: answer
answer: a_{n}=\sqrt{2}\cos(\frac{\pi}{4}+\frac{\pi}{3\cdot2^{n+2}})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=128453
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the recurrence relation $a_{n+1}=\sqrt{\frac{a_{n}+2-\sqrt{2-a_{n}}}{2}}(n \in N), a_{0}=\frac{\sqrt{2}}{2}$, try to find $a_{n}$.
