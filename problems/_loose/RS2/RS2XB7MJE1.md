---
tag: RS2XB7MJE1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=55261
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an arbitrary set of +1 and -1 of length $2^{\mathrm{k}}$. From it, a new set is obtained according to the following rule: each number is multiplied by the one following it; the last $2^{\mathrm{k}}$-th number is multiplied by the first. The same operation is performed on the new set of 1 and -1, and so on. Prove that eventually a set consisting of only ones is obtained.
