---
tag: 5RNWFSQ0AX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=189889
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The numbers $1, 12, 123, \ldots, 1234567890, 12345678901, \ldots$ are given. Each number is obtained from the previous one by appending the next digit, where after 0 comes 1, after 1 comes 2, ..., and after 9 comes 0. Prove that at least one of these numbers is divisible by 1981.
