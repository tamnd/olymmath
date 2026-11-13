---
tag: BDG3B8SXGA
kind: problem
type: answer
answer: "735"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182216
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
It is to be proven that there is exactly one natural number $n$ that satisfies the following conditions:

1. It consists (in decimal notation) of three different digits, none of which is equal to 1.
2. Any two of its digits represent numbers that are coprime to each other.
3. It is divisible by each of the numbers represented by its digits.

As it turns out, the number $n$ consists of prime number digits.
