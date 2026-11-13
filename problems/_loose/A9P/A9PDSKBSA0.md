---
tag: A9PDSKBSA0
kind: problem
type: answer
answer: "n"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206001
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all integers $n\ge1$ for which there exists $n$ real numbers $x_1,\ldots,x_n$ in the closed interval $[-4,2]$ such that the following three conditions are fulfilled:
- the sum of these real numbers is at least $n$.
- the sum of their squares is at most $4n$.
- the sum of their fourth powers is at least $34n$.
*(Proposed by Gerhard Woeginger, Austria)*
