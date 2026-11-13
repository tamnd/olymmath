---
tag: PFR9R2GQTA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219779
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On the board, we write the integers $1, 2, 3, \dots, 2019$. At each minute, we pick two numbers on the board $a$ and $b$, delete them, and write down the number $s(a + b)$ instead, where $s(n)$ denotes the sum of the digits of the integer $n$. Let $N$ be the last number on the board at the end.

- Is it possible to get $N = 19$?

- Is it possible to get $N = 15$?
