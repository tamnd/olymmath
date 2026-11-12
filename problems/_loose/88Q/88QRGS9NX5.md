---
tag: 88QRGS9NX5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=13385
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a board, there are $n$ positive numbers $a_{1}, a_{2}, \ldots, a_{n}$ written in a row. Vasya wants to write a number $b_{i} \geqslant a_{i}$ under each number $a_{i}$ such that for any two of the numbers $b_{1}, b_{2}, \ldots, b_{n}$, the ratio of one to the other is an integer. Prove that Vasya can write the required numbers so that the inequality $b_{1} b_{2} \ldots b_{n} \leqslant 2^{(n-1) / 2} a_{1} a_{2} \ldots a_{n}$ holds.

(F. Petrov)
