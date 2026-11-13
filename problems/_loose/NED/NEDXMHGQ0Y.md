---
tag: NEDXMHGQ0Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162154
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a row, several different natural numbers are written. We will call a pair of adjacent numbers bad if their sum is divisible by 7 and the left one is greater than the right one, or if their sum is not divisible by 7 and the left one is less than the right one. Every minute, the numbers of one of the bad pairs are swapped. Prove that sooner or later such swaps will stop.
