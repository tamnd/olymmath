---
tag: 3VA9B1P8MD
kind: problem
type: answer
answer: f(m) = m + a
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245796
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f:\mathbb{Z} \to \mathbb{Z}$ such that for all $m\in\mathbb{Z}$:

- $f(m+8) \le f(m)+8$,
- $f(m+11) \ge f(m)+11$.
