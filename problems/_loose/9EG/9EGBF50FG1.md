---
tag: 9EGBF50FG1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=52674
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the following triangular table of numbers:

| 0 | | 1 | | 2 | $\ldots$ | 1957 | | 1958 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| | 1 | | 3 | $\ldots$ | $\ldots$ | | 3915 | |
| | | $\ldots$ | $\ldots$ | $\ldots$ | $\ldots$ | $\ldots$ | $\ldots$ | |
| | | | $\ldots$ | $\ldots$ | $\ldots$ | $\ldots$ | | |

Each number (except the numbers in the top row) is equal to the sum of the two nearest numbers in the previous row. Prove that the number in the bottom row is divisible by 1958.
