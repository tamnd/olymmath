---
tag: NATRWRK97F
kind: problem
type: answer
answer: "18"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187985
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all natural numbers $n$ such that each of the digits $0,1,2, \ldots$, 9, appears exactly once in the representations of the numbers $n^{3}$ or $n^{4}$, but not in both numbers simultaneously.

Example. If only the digits $1,2,7$ and 8 need to be used, then the number 3 is a solution. Each of the digits $1,2,7$ and 8 appears exactly once in $3^{3}=27$ or in $3^{4}=81$, but not in both numbers simultaneously.
