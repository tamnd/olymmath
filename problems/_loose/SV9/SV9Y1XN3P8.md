---
tag: SV9Y1XN3P8
kind: problem
type: answer
answer: "1012"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85914
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Albert makes a sequence of numbers, the first 2023 of which are exactly the numbers 1 through 2023, in some order. To determine each subsequent number, Albert takes the median of the previous 2023 numbers. You find the median of 2023 numbers by sorting them by size and taking the exact middle number from that sequence.

How many different values can the three-thousandth number in Albert's sequence have?
