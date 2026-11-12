---
tag: 3TY2KR3TQK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=6751
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The numbers 1, 2, ..., 1000 are divided into two sets of 500 numbers each: red $k_{1}, k_{2}, \ldots, k_{500}$ and blue $s_{1}, s_{2}, \ldots, s_{500}$. Prove that the number of pairs $(m, n)$ for which the difference $k_{m} - s_{n}$ gives a remainder of 7 when divided by 100 is equal to the number of pairs $(m, n)$ for which the difference $s_{n} - k_{m}$ gives a remainder of 7 when divided by 100. Here, all possible differences, including negative ones, are considered.

Recall that the remainder of the division of an integer $a$ by 100 is the difference between $a$ and the nearest number not greater than $a$ and divisible by 100. For example, the remainder of the division of 2022 by 100 is $2022 - 2000 = 22$, and the remainder of the division of -11 by 100 is $-11 - (-100) = 89$. (E. Bakayev)
