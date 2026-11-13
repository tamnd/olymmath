---
tag: SV79SCHZA6
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204475
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each positive integer $n$, define $A(n)$ to be the sum of its divisors, and $B(n)$ to be the sum of products of pairs of its divisors. For example,
$$A(10)=1+2+5+10=18$$
$$B(10)=1\cdot 2+1\cdot 5+1\cdot 10+2\cdot 5+2\cdot 10+5\cdot 10=97$$
Find all positive integers $n$ for which $A(n)$ divides $B(n)$.
