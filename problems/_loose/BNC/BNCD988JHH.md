---
tag: BNCD988JHH
kind: problem
type: answer
answer: "13"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267103
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each positive integer $n$, let $S_n = \sum_{k=1}^nk^3$, and let $d(n)$ be the number of positive divisors of $n$. For how many positive integers $m$, where $m\leq 25$, is there a solution $n$ to the equation $d(S_n) = m$?
