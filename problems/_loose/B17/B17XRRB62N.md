---
tag: B17XRRB62N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90781
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A fissile square is a positive integer which is a perfect square, and whose digits form two perfect squares in a row, which will be called the left square and the right square. For example, 49, 1444, and 1681 are fissile squares (decomposing as $4|9,144| 4$, and $16 \mid 81$ respectively). Neither the left square nor the right square may begin with the digit 0 .

(a) Prove that every square with an even number of digits is the right square of only finitely many fissile squares.

(b) Prove that every square with an odd number of digits is the right square of infinitely many fissile squares.
