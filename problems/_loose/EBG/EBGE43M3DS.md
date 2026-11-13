---
tag: EBGE43M3DS
kind: problem
type: answer
answer: \left\lfloor \frac{2}{3} \times 64 \right\rfloor = 42
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207346
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Cells of $8 \times 8$ table contain pairwise distinct positive integers. Each integer is prime or a product of two primes. It is known that for any integer $a$ from the table there exists integer written in the same row or in the same column such that it is not relatively prime with $a$. Find maximum possible number of prime integers in the table.

2) Cells of $2n \times 2n$ table, $n \ge 2,$ contain pairwise distinct positive integers. Each integer is prime or a product of two primes. It is known that for any integer $a$ from the table there exist integers written in the same row and in the same column such that they are not relatively prime with $a$. Find maximum possible number of prime integers in the table.
