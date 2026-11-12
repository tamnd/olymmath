---
tag: 9BTN109QCP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=25422
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A row of 1000 numbers is written in a row. Below it, a second row of numbers is written according to the following rule: under each number $a$ in the first row, a natural number is written indicating how many times $a$ appears in the first row. From the second row, a third row is similarly constructed: under each number $b$ in the second row, a natural number is written indicating how many times $b$ appears in the second row. Then, from the third row, a fourth row is constructed in the same way, from the fourth row - a fifth row, and so on.

a) Prove that some row coincides with the next one.

b) Moreover, prove that the 11th row coincides with the 12th.

c) Provide an example of such an initial row for which the 10th row does not coincide with the 11th.
