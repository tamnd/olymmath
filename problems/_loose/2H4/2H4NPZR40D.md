---
tag: 2H4NPZR40D
kind: problem
type: answer
answer: 41,271
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=74142
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine the prime numbers $p$ such that the decimal representation of the fraction $\frac{1}{p}$ has a period of length 5.

Note: If the decimal representation of a number has a sequence of digits that repeats periodically, the length of the smallest sequence of digits that repeats is the length of the decimal representation. For example, $61 / 495=0.1232323 \ldots$, although 23, 2323 are sequences of digits that repeat in the decimal representation, the length of the smallest sequence is 2 and this is the period length.
