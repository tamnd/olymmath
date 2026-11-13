---
tag: V7X3CFP0WQ
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231840
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all $n$ positive integers such that exists an $n\times n$ where we can write $n$ times each of the numbers from $1$ to $n$ (one number in each cell), such that the $n$ sums of numbers in each line leave $n$ distinct remainders in the division by $n$, and the $n$ sums of numbers in each column leave $n$ distinct remainders in the division by $n$.
