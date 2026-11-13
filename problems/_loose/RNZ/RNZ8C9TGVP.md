---
tag: RNZ8C9TGVP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=92493
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Take a pair of natural numbers, perform the division with remainder of the larger by the smaller (if the two numbers are equal, also use one to divide the other). Then take the quotient and the remainder as a new pair of numbers, and continue the above operation until one of the numbers becomes 0. Try to prove that if the two numbers initially taken do not exceed 1988, then the described operation cannot be performed more than 6 times.
