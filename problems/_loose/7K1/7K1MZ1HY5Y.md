---
tag: 7K1MZ1HY5Y
kind: problem
type: answer
answer: "4043"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=181493
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each non-negative real $x$, we define $\lfloor x\rfloor$ as the integer part of $x$, that is, the largest integer less than or equal to $x$, and $\{x\}=x-\lfloor x\rfloor$ as the fractional part of $x$.

Let $p$ be a positive real non-integer solution of the equation $\{z\lfloor z\rfloor\}=2021\{z\}$. What is the second smallest possible value of $\lfloor p\rfloor$?
(A) 2021
(B) 2022
(C) 3033
(D) 4042
(E) 4043
