---
tag: RVWXD4V8D7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=183572
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given any three-digit natural number (e.g., 357). If you write the same number again after this number, you get a six-digit number (in the example 357 357).

Prove that for any six-digit number that can be generated in this way, the following statement is true:

If you divide the six-digit number first by 7, then the found quotient by 11, and the now found quotient by 13, you get the three-digit original number!
