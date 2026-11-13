---
tag: MRT77HF92S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231272
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a nonzero natural number and let $S = \{1, 2, . . . , n\}$.
A $3 \times n$ board is called *beautiful * if it can be completed with numbers from the set $S$ like this as long as the following conditions are met:
$\bullet$ on each line, each number from the set S appears exactly once,
$\bullet$ on each column the sum of the products of two numbers on that column is divisible by $n$ (that is, if the numbers $a, b, c$ are written on a column, it must be $ab + bc + ca$ be divisible by $n$).
For which values of the natural number $n$ are there beautiful tables ¸and for which values do not exist? Justify your answer.
