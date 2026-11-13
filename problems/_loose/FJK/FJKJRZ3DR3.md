---
tag: FJKJRZ3DR3
kind: problem
type: answer
answer: "22"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213924
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\{a_n\}_{n\geq 1}$ be a sequence defined by $a_n=\int_0^1 x^2(1-x)^ndx$.
Find the real value of $c$ such that $\sum_{n=1}^{\infty} (n+c)(a_n-a_{n+1})=2.$
