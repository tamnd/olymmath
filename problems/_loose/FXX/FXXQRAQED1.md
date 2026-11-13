---
tag: FXXQRAQED1
kind: problem
type: answer
answer: "1680"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211523
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=202
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any positive integer $a$, define $M(a)$ to be the number of positive integers $b$ for which $a+b$ divides $ab$. Find all integer(s) $a$ with $1\le a\le 2013$ such that $M(a)$ attains the largest possible value in the range of $a$.
