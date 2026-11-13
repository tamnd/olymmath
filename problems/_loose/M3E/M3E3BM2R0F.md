---
tag: M3E3BM2R0F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162097
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a string of 25 digits. Is it always possible to insert arithmetic operation signs, $+- \times$, : and parentheses into this string so that a numerical expression equal to 0 is formed? Consecutive digits can be combined into numbers, but the order of the digits cannot be changed.
