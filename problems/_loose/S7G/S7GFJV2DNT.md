---
tag: S7GFJV2DNT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243356
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Alka finds a number $n$ written on a board that ends in $5.$ She performs a sequence of operations with the number on the board. At each step, she decides to carry out one of the following two operations:

$1.$ Erase the written number $m$ and write it´s cube $m^3$.
$2.$ Erase the written number $m$ and write the product $2023m$.

Alka performs each operation an even number of times in some order and at least once, she finally obtains the number $r$. If the tens digit of $r$ is an odd number, find all possible values that the tens digit of $n^3$ could have had.
