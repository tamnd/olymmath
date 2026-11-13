---
tag: K0K6B92SYK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205452
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The Fibonacci sequence is the list of numbers that begins $1, 2, 3, 5, 8, 13$ and continues with each subsequent number being the sum of the previous two.
Prove that for every positive integer $n$ when the first $n$ elements of the Fibonacci sequence are alternately added and subtracted, the result is an element of the sequence or the negative of an element of the sequence.
For example, when $n = 4$ we have $1-2+3-5 = -3$ and $3$ is an element of the Fibonacci sequence.
