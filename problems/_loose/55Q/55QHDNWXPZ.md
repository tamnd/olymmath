---
tag: 55QHDNWXPZ
kind: problem
type: answer
answer: d
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219981
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For an integer $n$ with $b$ digits, let a *subdivisor* of $n$ be a positive number which divides a number obtained by removing the $r$ leftmost digits and the $l$ rightmost digits of $n$ for nonnegative integers $r,l$ with $r+l<b$ (For example, the subdivisors of $143$ are $1$, $2$, $3$, $4$, $7$, $11$, $13$, $14$, $43$, and $143$). For an integer $d$, let $A_d$ be the set of numbers that don't have $d$ as a subdivisor. Find all $d$, such that $A_d$ is finite.
