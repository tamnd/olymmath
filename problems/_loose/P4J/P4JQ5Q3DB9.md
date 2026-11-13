---
tag: P4JQ5Q3DB9
kind: problem
type: answer
answer: a_{n}=5a_{n-1}-3a_{n-2}\quad(n\geqslant2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=97251
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{n}=\left(\frac{5+\sqrt{13}}{2}\right)^{n}-\left(\frac{5-\sqrt{13}}{2}\right)^{n} (n=0,1,2, \cdots)$, try to find a recurrence relation for $a_{n}$.
