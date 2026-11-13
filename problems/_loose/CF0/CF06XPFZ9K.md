---
tag: CF06XPFZ9K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=97135
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a finite sequence of 0s and 1s, it has the property:
（1）If 5 consecutive digits are extracted from somewhere in the sequence and 5 consecutive digits are also extracted from any other place, then these 5 digits will not be the same (they can overlap, for example 0110101).
（2）If the digit 0 or 1 is added to the right of the sequence, then property (1) no longer holds.
Prove that the first 4 digits of this sequence are the same as the last 4 digits.
