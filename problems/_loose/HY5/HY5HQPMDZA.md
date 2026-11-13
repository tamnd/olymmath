---
tag: HY5HQPMDZA
kind: problem
type: answer
answer: (2,5,3),(5,3,2),(3,2,5)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80980
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all prime numbers $p, q, r$ such that $p$ divides $1+q^{r}$, $q$ divides $1+r^{p}$, and $r$ divides $1+p^{q}$.
